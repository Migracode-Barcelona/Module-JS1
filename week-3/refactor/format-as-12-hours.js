// There is an implementation of format-as-12-hours.js in the debug directory
// Copy that implementation in here, and improve it:
// That implementation currently uses the expression Number(time.slice(0, 2)) twice
// Store this expression in a variable and reference it twice in the function in the correct place

function formatAs12HourClock(time) {
  const slicedHourConvertedToNumber = Number(time.slice(0, 2));

  if (slicedHourConvertedToNumber > 12) {
    let hours = slicedHourConvertedToNumber - 12;
    let minutes = Number(time.slice(3, 5));
    minutes = minutes.toString().padStart(2, "0");
    return `${hours}:${minutes} pm`;
  }
  return `${time} am`;
}

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
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

// Explain why it makes more sense to store this expression in a variable

// We tend to write less  code than we should and just like function we can call the variable as many times as we want to within the function.
