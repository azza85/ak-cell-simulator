import { formatRowCol } from "./formatRowCol";
export const setInitialCell = (row: number, col: number) => {
  return [
    formatRowCol(row, col),
    formatRowCol(row + 1, col + 1),
    formatRowCol(row + 2, col + 1),
    formatRowCol(row + 2, col),
    formatRowCol(row + 2, col - 1)
  ];
};
