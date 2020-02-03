import { formatRowCol } from "./../helpers/formatRowCol";

test("formatRowCol to output an object", () => {
  const expected = {
    row: 3,
    col: 3
  };
  expect(formatRowCol(3, 3)).toEqual(expect.objectContaining(expected));
});
