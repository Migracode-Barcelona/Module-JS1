function formatAs12HourClock(time) {
  //The bug solution
  const hour = Number(time.slice(0, 2)); // Extract the hours
  const minutes = time.slice(3, 5); // Extract the minutes

  let hoursFormat;

  if (hour > 12) {
    hoursFormat = hour - 12; // Convert to 12-hour format
    return `${hoursFormat.toString().padStart(2, "0")}:${minutes} pm`; // Ensure two-digit hour i.e collect makes it two-digits and add colons and the minutes.
  }

  if (hour === 12) {
    hoursFormat = hour; // Keep it as 12 for PM
    return `${hoursFormat}:${minutes} pm`;
  }

  hoursFormat = hour; // For AM case
  return `${hoursFormat.toString().padStart(2, "0")}:${minutes} am`; // Ensure two-digit hour i.e collect makes it two-digits and add colons and the minutes.
}
//End of the bug solution.
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

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
// Assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm"; // This should be the correct expected output
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// b) Check the assertion output and explain what the bug is
//Answer:The function is returning 5:00pm instead of 05:42pm because
//the function doesn't handle the minute properly.

// c) Now fix the bug and re-run all your assertions
