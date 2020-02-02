/**
 *
 * @param num will be used to generate an array
 * between 0 and the index of the num passed in.
 * The highest number will be num - 1
 */

export const createCells = (num: number) =>
  num !== undefined ? [...Array(num).keys()].map(i => i) : [];
