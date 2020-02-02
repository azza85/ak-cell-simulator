import * as React from "react";
import "./styles.css";
import { createIniitialGrid } from "./helpers/createIniitialGrid";
import { updateGrid } from "./helpers/updateGrid";

const GRID_COLS = 100;
const GRID_ROWS = 100;

export default function App() {
  const initialState = createIniitialGrid(GRID_ROWS, GRID_COLS);
  const [grid, setGrid] = React.useState(initialState);
  const [activeCells, setActiveCells] = React.useState([]);

  const updateGridCell = React.useCallback(
    (grid, activeCells, row, col) => {
      const newGrid = updateGrid(grid, row, col);
      const newID = row * GRID_COLS + col;
      let newActiveCells = activeCells.includes(newID)
        ? activeCells
        : activeCells.concat(newID);
      setGrid(newGrid);
      setActiveCells(newActiveCells);
      return;
    },
    []
  );

  return (
    <div className="App">
      <div>
        {Object.keys(grid).map((row, rowIndex) => {
          return (
            <div key={row} className="row">
              {Object.keys(grid[row]).map((col, colIndex) => (
                <div
                  key={col}
                  className={
                    grid[row][col] === "active"
                      ? "active cell"
                      : "cell"
                  }
                  onClick={() =>
                    updateGridCell(
                      grid,
                      activeCells,
                      rowIndex,
                      colIndex
                    )
                  }
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
