import { test, expect } from "vitest";

const addOne = (num1, num2) => num1 + num2;

test("1 -> 2", () => {
  const expected = 2;
  const result = addOne(1, 1);

  expect(result).toEqual(expected);
});
