import { createCells } from "./../helpers/createCells";
test("create an array between 0 and the num passed in", () => {
  expect(createCells(3)).toEqual(expect.arrayContaining([0, 1, 2]));
});
