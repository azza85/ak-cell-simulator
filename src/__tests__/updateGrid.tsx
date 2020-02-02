import { updateGrid } from "./../helpers/updateGrid";
test("create an initial grid for the simulator", () => {
  const expected = { "1": 1, "2": 2, "3": { "3": "active" } };
  expect(updateGrid({ 1: 1, 2: 2, 3: 3 }, 3, 3)).toEqual(
    expect.objectContaining(expected)
  );
});
