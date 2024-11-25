
function isValidTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false; // Invalid sides
  }
  return a + b > c && a + c > b && b + c > a;
}

// Test invalid triangle with sum of two sides less than or equal to the third side
console.assert(isValidTriangle(1, 2, 3) === false, "Test Case 1 Failed");
console.assert(isValidTriangle(1, 3, 2) === false, "Test Case 2 Failed");
console.assert(isValidTriangle(3, 1, 2) === false, "Test Case 3 Failed");

// Test invalid triangle with zero or negative sides
console.assert(isValidTriangle(0, 2, 3) === false, "Test Case 4 Failed");
console.assert(isValidTriangle(-1, 2, 3) === false, "Test Case 5 Failed");
console.assert(isValidTriangle(2, -1, 3) === false, "Test Case 6 Failed");
console.assert(isValidTriangle(2, 3, -1) === false, "Test Case 7 Failed");

// Test valid triangle
console.assert(isValidTriangle(3, 4, 5) === true, "Test Case 8 Failed");
console.assert(isValidTriangle(6, 8, 10) === true, "Test Case 9 Failed");
console.assert(isValidTriangle(7, 10, 5) === true, "Test Case 10 Failed");
