import { GRID_COLS } from "./constants";

export const calcCellID = (row, col) => row * GRID_COLS + col;
