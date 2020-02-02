export const arrAsObj = (arr: Array<any>, val: string) =>
  arr.reduce(
    (obj, key) => ({
      ...obj,
      [key]: val
    }),
    {}
  );
