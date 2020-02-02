import { arrAsObj } from "./../helpers/arrAsObj";
test("output an array as an object", () => {
  const expected = { a: true, b: true, c: true };
  expect(arrAsObj(["a", "b", "c"], true)).toEqual(
    expect.objectContaining(expected)
  );
});
