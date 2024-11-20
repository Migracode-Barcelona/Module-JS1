function isProperFraction(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Denominator cannot be zero");
  }
  return Math.abs(numerator) < Math.abs(denominator);
}

// Proper Fraction check
console.assert(isProperFraction(2, 3) === true, "Test Case 1 Failed");

// Improper Fraction check
console.assert(isProperFraction(5, 2) === false, "Test Case 2 Failed");

// Zero Denominator check
try {
  isProperFraction(3, 0);
  console.assert(false, "Test Case 3 Failed");
} catch (e) {
  console.assert(
    e.message === "Denominator cannot be zero",
    "Test Case 3 Passed"
  );
}

// Negative Fraction check
console.assert(isProperFraction(-4, 7) === true, "Test Case 4 Failed");

// Equal Numerator and Denominator check
console.assert(isProperFraction(3, 3) === false, "Test Case 5 Failed");
