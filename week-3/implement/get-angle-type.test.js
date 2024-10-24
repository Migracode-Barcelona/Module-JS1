// Importing the function from the code file to be tested
const { getAngleType } = require("./get-angle-type");

// Test for Right Angle
test("should return 'Right angle' for 90 degrees", () => {
  expect(getAngleType(90)).toBe("Right angle");
});

// Test for Acute Angle
test("should return 'Acute angle' for angles less than 90 degrees and greater than or equal to 5 degrees", () => {
  expect(getAngleType(45)).toBe("Acute angle");
  expect(getAngleType(5)).toBe("Acute angle");
});

// Test for Obtuse Angle
test("should return 'Obtuse angle' for angles greater than 90 degrees but less than 180 degrees", () => {
  expect(getAngleType(120)).toBe("Obtuse angle");
  expect(getAngleType(91)).toBe("Obtuse angle");
});

// Test for Straight Angle
test("should return 'Straight angle' for 180 degrees", () => {
  expect(getAngleType(180)).toBe("Straight angle");
});

// Test for Reflex Angle
test("should return 'Reflex angle' for angles greater than 180 degrees but less than 360 degrees", () => {
  expect(getAngleType(270)).toBe("Reflex angle");
  expect(getAngleType(181)).toBe("Reflex angle");
});

// Test for invalid angle values
test("should return 'Wrong angle value!' for negative angles or angles outside the 5-359 range", () => {
  expect(getAngleType(-5)).toBe("Wrong angle value!");
  expect(getAngleType(360)).toBe("Wrong angle value!");
  expect(getAngleType(0)).toBe("Wrong angle value!");
});
