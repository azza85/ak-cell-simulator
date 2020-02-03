import { calcCellID } from "./calcCellID";

export const calcNeighbourCount = (
  activeCells: number[],
  row: number,
  col: number
) => {
  const topLeft = calcCellID(row - 1, col - 1);
  const isTopLeft = activeCells.includes(topLeft);
  const top = calcCellID(row - 1, col);
  const isTop = activeCells.includes(top);
  const topRight = calcCellID(row - 1, col + 1);
  const isTopRight = activeCells.includes(topRight);
  const left = calcCellID(row, col - 1);
  const isLeft = activeCells.includes(left);
  const right = calcCellID(row, col + 1);
  const isRight = activeCells.includes(right);
  const bottomRight = calcCellID(row + 1, col + 1);
  const isBottomRight = activeCells.includes(bottomRight);
  const bottom = calcCellID(row + 1, col);
  const isBottom = activeCells.includes(bottom);
  const bottomLeft = calcCellID(row + 1, col - 1);
  const isBottomLeft = activeCells.includes(bottomLeft);
  return [
    isTopLeft,
    isTop,
    isTopRight,
    isLeft,
    isRight,
    isBottomRight,
    isBottom,
    isBottomLeft
  ].filter(item => item === true).length;
};
