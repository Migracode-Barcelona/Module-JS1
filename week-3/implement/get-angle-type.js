// Implement a function getAngleType, and tests for each of the acceptance criteria.

// Acceptance criteria:

// Identify Right Angles:
// When the angle is exactly 90 degrees,
// Then the function should return "Right angle"

// Identify Acute Angles:
// When the angle is less than 90 degrees,
// Then the function should return "Acute angle"

// Identify Obtuse Angles:
// When the angle is greater than 90 degrees and less than 180 degrees,
// Then the function should return "Obtuse angle"

// Identify Straight Angles:
// When the angle is exactly 180 degrees,
// Then the function should return "Straight angle"

// Identify Reflex Angles:
// When the angle is greater than 180 degrees and less than 360 degrees,
// Then the function should return "Reflex angle"

function getAngleType(angleInput) {
  if (angleInput === 90) {
    return "Right angle";
  } else if (angleInput < 90) {
    return "Acute angle";
  } else if (angleInput > 90 && angleInput < 180) {
    return "Obtuse angle";
  } else if (angleInput === 180) {
    return "Straight angle";
  } else if (angleInput > 180 && angleInput < 360) {
    return "Reflex angle";
  } else {
    return "Wrong angle value!";
  }
}
// Right Angle
console.log(getAngleType(90));

// Acute Angles
console.log(getAngleType(45));
console.log(getAngleType(89));

// Obtuse Angles
console.log(getAngleType(120));
console.log(getAngleType(135));

// Straight Angle
console.log(getAngleType(180));

// Reflex Angles
console.log(getAngleType(200));
console.log(getAngleType(270));

// Invalid Angles
console.log(getAngleType(-10));
console.log(getAngleType(370));
console.log(getAngleType(360)); // Expected: "Wrong angle value" (full circle)
