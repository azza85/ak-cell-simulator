import { createIniitialGrid } from "./../helpers/createIniitialGrid";
test("create an initial grid for the simulator", () => {
  const expected = {
    "0": { "0": "", "1": "", "2": "" },
    "1": { "0": "", "1": "", "2": "" },
    "2": { "0": "", "1": "", "2": "" }
  };
  expect(createIniitialGrid(3, 3)).toEqual(
    expect.objectContaining(expected)
  );
});
