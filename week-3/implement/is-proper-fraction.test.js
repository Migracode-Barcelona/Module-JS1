const { isProperFraction } = require("./is-proper-fraction");

// 1. Proper Fraction check
test("should return true for proper fractions (numerator < denominator)", () => {
  expect(isProperFraction(2, 3)).toBe(true);
  expect(isProperFraction(-4, 7)).toBe(true);
});

// 2. Improper Fraction check
test("should return false for improper fractions (numerator >= denominator)", () => {
  expect(isProperFraction(5, 2)).toBe(false);
  expect(isProperFraction(7, 7)).toBe(false);
  expect(isProperFraction(9, 8)).toBe(false);
});

// 3. Zero Denominator check
test("should throw an error when denominator is zero", () => {
  expect(() => isProperFraction(3, 0)).toThrow("Denominator cannot be zero"); // Zero denominator error
});

// 4. Negative Fraction check
test("should return true for negative proper fractions", () => {
  expect(isProperFraction(-4, 7)).toBe(true);
  expect(isProperFraction(4, -7)).toBe(true);
  expect(isProperFraction(-4, -7)).toBe(true);
});

// 5. Equal Numerator and Denominator check
test("should return false when numerator equals denominator", () => {
  expect(isProperFraction(3, 3)).toBe(false);
  expect(isProperFraction(-5, -5)).toBe(false);
});
