
function isValidTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) {
    return false; // Invalid sides
  }
  return a + b > c && a + c > b && b + c > a;
}

