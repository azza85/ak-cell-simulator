import { GRID_COLS } from "./constants";
export const getRowCollFromCellID = (id: number) => {
  const row = Math.floor(id / GRID_COLS);
  const col = id - row * GRID_COLS;
  return {
    row: row,
    col: col > 0 ? col : GRID_COLS + col
  };
};
