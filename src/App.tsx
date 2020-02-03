import * as React from "react";
import "./styles.css";
import { createIniitialGrid } from "./helpers/createIniitialGrid";
import { updateGrid } from "./helpers/updateGrid";
import { setInitialCell } from "./helpers/setInitialCell";
import { GRID_COLS, GRID_ROWS } from "./helpers/constants";
import { randomNumberBetweenXY } from "./helpers/randomNumberBetweenXY";
import { getRowCollFromCellID } from "./helpers/getRowCollFromCellID";
import { calcNeighbourCount } from "./helpers/calcNeighbourCount";
import { tsIncludes } from "./helpers/tsIncludes";

import ButtonWrap from "./components/ButtonWrap";

export default function App() {
  const initialState = createIniitialGrid(GRID_ROWS, GRID_COLS);
  const [grid, setGrid] = React.useState(initialState);
  const [cellsAlive, setCellsAlive] = React.useState(false);
  const [isNextGen, setNextGen] = React.useState(false);
  const [activeCells, setActiveCells] = React.useState([]);

  const resetGrid = () => {
    setGrid(initialState);
    setNextGen(false);
    setActiveCells([]);
  };
  const startCells = () => {
    setCellsAlive(true);
    const startRow = randomNumberBetweenXY(0, Math.floor(GRID_ROWS * 0.8));
    const startCol = randomNumberBetweenXY(0, Math.floor(GRID_COLS * 0.8));
    updateGridArray(grid, activeCells, setInitialCell(startRow, startCol));
  };
  const stopCells = () => {
    setCellsAlive(false);
  };

  const updateGridCell = React.useCallback((grid, activeCells, row, col) => {
    const newGrid = updateGrid(grid, row, col);
    const newID = row * GRID_COLS + col;
    let newActiveCells = activeCells.includes(newID)
      ? activeCells
      : activeCells.concat(newID);
    setGrid(newGrid);
    setActiveCells(newActiveCells);
    return;
  }, []);

  const updateGridArray = (
    grid: object,
    activeCells: number[],
    array: { row: number; col: number }[]
  ) => {
    let newGrid: object = grid;
    let newActiveCells: number[] = activeCells;
    for (let i = 0; i < array.length; i++) {
      newGrid = updateGrid(newGrid, array[i].row, array[i].col);
      newActiveCells = newActiveCells.concat(
        array[i].row * GRID_COLS + array[i].col
      );
      if (i === array.length - 1) {
        setGrid(newGrid);
        setActiveCells(newActiveCells); // tslint:disable-line
      }
    }
  };
  React.useEffect(() => {
    if (isNextGen) {
      const intervalID = setInterval(() => {
        let newGrid = grid;
        let newActiveCells = activeCells;
        for (let i = 0; i < activeCells.length; i++) {
          const row = getRowCollFromCellID(activeCells[i]).row;
          const col = getRowCollFromCellID(activeCells[i]).col;
          const newValue = row * GRID_COLS + col;
          const neightbourCount = calcNeighbourCount(activeCells, row, col);
          if (neightbourCount < 2 || neightbourCount > 3) {
            newGrid = updateGrid(newGrid, row, col);
            newActiveCells = tsIncludes(newActiveCells, activeCells[i])
              ? [...newActiveCells.slice(0, i), ...newActiveCells.slice(i + 1)]
              : newActiveCells.concat(newValue);
          }
          if (i === activeCells.length - 1) {
            setGrid(newGrid);
            setActiveCells(newActiveCells);
          }
        }
      }, 100);

      return () => clearInterval(intervalID);
    }
  }, [activeCells, isNextGen, grid, updateGridCell]);

  return (
    <div className="App">
      <h1>Cell Simulator</h1>
      <h3>Instructions</h3>
      <ul>
        <li>Click Start to create your first cell</li>
        <li>Click Add to add more cells</li>
        <li>Click anywhere on the grid to create an individual cell</li>
        <li>Click Next Generation to watch the cells evolve</li>
        <li>Click Reset to reset the board</li>
      </ul>
      <div className="flex flex-col">
        <div className="marginAuto">
          {Object.keys(grid).map((row, rowIndex) => {
            return (
              <div key={row} className="row">
                {Object.keys(grid[row]).map((col, colIndex) => (
                  <div
                    key={col}
                    className={
                      grid[row][col] === "active" ? "active cell" : "cell"
                    }
                    onClick={() =>
                      updateGridCell(grid, activeCells, rowIndex, colIndex)
                    }
                  />
                ))}
              </div>
            );
          })}
        </div>
        <div className={"marginAuto marginTB10"}>
          {cellsAlive ? (
            <React.Fragment>
              <ButtonWrap action={startCells} label="Add" sideMargin={true} />
              <ButtonWrap action={stopCells} label="Stop" sideMargin={true} />
              <ButtonWrap
                action={() => setNextGen(true)}
                label="Next Generation"
                sideMargin={true}
              />
            </React.Fragment>
          ) : (
            <ButtonWrap action={startCells} label="Start" sideMargin={false} />
          )}
          {cellsAlive ? (
            <ButtonWrap action={resetGrid} label="Reset" sideMargin={true} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
