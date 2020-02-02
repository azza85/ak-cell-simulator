import * as React from "react";
import "./styles.css";
import { createIniitialGrid } from "./helpers/createIniitialGrid";

const GRID_COLS = 100;
const GRID_ROWS = 100;

export default function App() {
  const initialState = createIniitialGrid(GRID_ROWS, GRID_COLS);
  const [grid, setGrid] = React.useState(initialState);
  return (
    <div className="App">
      {Object.keys(grid).map(row => {
        return (
          <div key={row} className="row">
            {Object.keys(grid[row]).map(col => (
              <div
                key={col}
                className={
                  grid[row][col] === "active" ? "active cell" : "cell"
                }
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
