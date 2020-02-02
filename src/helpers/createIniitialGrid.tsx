import { arrAsObj } from "./arrAsObj";
import { createCells } from "./createCells";
export const createIniitialGrid = (rows: number, cols: number) =>
  arrAsObj(createCells(rows), arrAsObj(createCells(cols), ""));
