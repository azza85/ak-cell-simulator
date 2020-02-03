import { GRID_COLS } from "./constants";

export const calcCellID = (row: number, col: number) => row * GRID_COLS + col;
