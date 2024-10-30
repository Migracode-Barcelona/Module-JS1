// Implement a function isValidTriangle

// 🗝️ Terms
// the Triangle Inequality says: the sum of any two sides is always greater than the third side.
// practical examples:
// Side a = 3
// Side b = 3
// Side c = 3

// This is a valid triangle, because a plus b = 6 and 6 is greater than 3
// Another way to write this is a + b > c
// It's also true that b + c > a
// It's also true that a + c > b

// In our function isValidTriangle, we need to return false for any triangle where the sum of any two sides is less than or equal to the length of the third side.
// and we need to return true for any triangle where the sum of any two sides is greater than the length of the third side.

// Acceptance criteria:

// Given the lengths of three sides of a triangle (a, b, c),
// When the function isValidTriangle is called with these side lengths as input,
// Then it should:

// scenario: invalid triangle
// Given the side lengths a, b, and c,
// When the sum of any two side lengths is less than or equal to the length of the third side (i.e., a + b <= c, a + c <= b, b + c <= a),
// Then it should return false because these conditions violate the Triangle Inequality, which states that the sum of the lengths of any two sides of a triangle must be greater than the length of the third side.

// scenario: invalid triangle
// Check for Valid Input:
// Given the sides a, b, and c,
// When any of the sides are less than or equal to zero,
// Then it should return false because a triangle cannot have zero or negative side lengths.

// scenario: valid triangle
// Given valid side lengths where the sum of any two sides is greater than the third side,
// When the function is called with these values as input,
// Then it should return true because the input forms a valid triangle.

// This specification outlines the behavior of the isValidTriangle function for different input scenarios, ensuring it properly checks for invalid side lengths and whether they form a valid triangle according to the Triangle Inequality Theorem.

//solution
function isValidTriangle(a, b, c) {
  //check if all side is less than or equal to 0
  if (a <= 0 || b <= 0 || c <= 0) {
    return false;
  }
  //invalid triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return false;
  }
  //check for valid input
  return true;
}
console.log(isValidTriangle(3, 4, 5));
console.log(isValidTriangle(6, 8, 10));
console.log(isValidTriangle(1, 2, 3));
console.log(isValidTriangle(10, 3, 7));
console.log(isValidTriangle(0, 4, 7));
console.log(isValidTriangle(-2, 4, 6));
console.log(isValidTriangle(3, 3, 3));
