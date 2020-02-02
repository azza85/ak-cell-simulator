export const updateGrid = (
  grid: object,
  row: number,
  col: number
) => {
  return {
    ...grid,
    [row]: {
      ...grid[row],
      [col]: grid[row][col] !== "active" ? "active" : ""
    }
  };
};
