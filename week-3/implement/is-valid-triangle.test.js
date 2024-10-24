const { isValidTriangle } = require("./is-valid-triangle");

// 1. Invalid Triangle (Triangle Inequality Violation)
test("should return false if the sum of any two sides is less than or equal to the third side", () => {
  expect(isValidTriangle(1, 2, 3)).toBe(false);
  expect(isValidTriangle(5, 1, 2)).toBe(false);
  expect(isValidTriangle(10, 2, 7)).toBe(false);
});

// 2. Invalid Triangle (Zero or Negative Side Length)
test("should return false if any side length is less than or equal to zero", () => {
  expect(isValidTriangle(0, 5, 7)).toBe(false);
  expect(isValidTriangle(-1, 4, 5)).toBe(false);
  expect(isValidTriangle(3, -2, 4)).toBe(false);
  expect(isValidTriangle(7, 3, 0)).toBe(false);
});

// 3. Valid Triangle
test("should return true for valid triangles where the sum of any two sides is greater than the third side", () => {
  expect(isValidTriangle(3, 4, 5)).toBe(true);
  expect(isValidTriangle(6, 8, 10)).toBe(true);
  expect(isValidTriangle(7, 7, 7)).toBe(true);
  expect(isValidTriangle(10, 12, 15)).toBe(true);
});

// Edge cases
test("should return false for edge cases where sides almost violate the triangle inequality", () => {
  expect(isValidTriangle(1, 1, 2)).toBe(false);
  expect(isValidTriangle(5, 9, 15)).toBe(false);
});
