// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

// Explain why it makes more sense to store this expression in a variable
//Answer:It makes more sense to store this expression in a variable for easy readability,
//Extracting hour once avoids repeated work, making the function faster and more efficient,
//especially with large datasets or frequent calls.

//solution:

function formatAs12HourClock(time) {
  const hour = Number(time.slice(0, 2));
  const minutes = time.slice(3, 5);

  let hoursFormat;

  if (hour > 12) {
    hoursFormat = hour - 12; // Convert to 12-hour format
    return `${hoursFormat.toString().padStart(2, "0")}:${minutes} pm`; // Ensure two-digit hour i.e collect makes it two-digits and add colons and the minutes.
  }

  if (hour === 12) {
    hoursFormat = hour; // Keep it as 12 for PM
    return `${hoursFormat}:${minutes} am`;
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

const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "05:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

console.log(formatAs12HourClock("08:00"));
console.log(formatAs12HourClock("23:00"));
console.log(formatAs12HourClock("17:42"));
console.log(formatAs12HourClock("00:15"));
console.log(formatAs12HourClock("12:30"));
