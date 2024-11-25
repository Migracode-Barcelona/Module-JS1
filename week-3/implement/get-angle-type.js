// Test cases
console.assert(
  getAngleType(90) === "Right angle",
  "Test failed: Expected 'Right angle' for input 90"
);

console.assert(
  getAngleType(45) === "Acute angle",
  "Test failed: Expected 'Acute angle' for input 45"
);

console.assert(
  getAngleType(135) === "Obtuse angle",
  "Test failed: Expected 'Obtuse angle' for input 135"
);

console.assert(
  getAngleType(180) === "Straight angle",
  "Test failed: Expected 'Straight angle' for input 180"
);

console.assert(
  getAngleType(270) === "Reflex angle",
  "Test failed: Expected 'Reflex angle' for input 270"
);

console.assert(
  getAngleType(0) === "Acute angle",
  "Test failed: Expected 'Acute angle' for input 0"
);

console.assert(
  getAngleType(360) === "Invalid angle",
  "Test failed: Expected 'Invalid angle' for input 360"
);

console.assert(
  getAngleType(-45) === "Invalid angle",
  "Test failed: Expected 'Invalid angle' for input -45"
);
