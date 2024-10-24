// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
const currentOutput = formatAs12HourClock("08:00");
const targetOutput = "08:00 am";
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

const currentOutput2 = formatAs12HourClock("23:00");
const targetOutput2 = "11:00 pm";
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// ANSWER //
// I have already refactored it in the debug and used variables
// But refactoring again

function formatAs12HourClock(time) {
  // Store the expression in a variable to avoid duplication
  let hours = Number(time.slice(0, 2)); // Extract the hours once and reuse it
  let minutes = time.slice(3); // Extract minutes part
  let timeOfDay = "am"; // Default to "am"

  // Determine if it should be "pm"
  if (hours >= 12) {
    timeOfDay = "pm";
  }

  // Handle special cases for 12-hour format
  if (hours === 0) {
    hours = 12; // 00:00 is 12:00 AM
  } else if (hours > 12) {
    hours -= 12; // Convert to 12-hour format
  }

  return `${hours.toString().padStart(2, "0")}:${minutes} ${timeOfDay}`;
}

console.log(formatAs12HourClock("09:12"));
console.log(formatAs12HourClock("12:00"));
console.log(formatAs12HourClock("19:22"));
console.log(formatAs12HourClock("00:00"));

// Number(time.slice(0, 2)) is only computed once and stored in the hours variable.
// Reusing the same expression prevents duplication. If we use Number(time.slice(0, 2)) multiple times, we're repeating the same logic, which can make the code more prone to errors if we need to change it in the future. This simplifies the code and makes it clearer without losing functionality.
// The function now avoids recalculating the hours, which is both more efficient and easier to maintain.
