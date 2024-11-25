function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    return `${Number(time.slice(0, 2)) - 12}:00 pm`;
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

// formatAs12HourClock currently has a 🐛

// a) Write an assertion to check the return value of formatAs12HourClock when it is called with an input "17:42"
const currentOutput3 = formatAs12HourClock("17:42");
const targetOutput3 = "5:42 pm";
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);



// b) Check the assertion output and explain what the bug is
//Bug: The current implementation does not properly handle the following:

//Times where the minutes (:mm) are non-zero (e.g., "17:42").
//Times within the 12-hour range (like "08:00") are incorrectly labeled am without checking the context of midnight or noon.
//Times at the hour of 12 (e.g., "12:00" or "00:00") do not follow 12-hour clock conventions.


// c) Now fix the bug and re-run all your assertions
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3); // Extract the `:mm` part
  if (hours === 0) {
    return `12:${minutes} am`; // Midnight case
  } else if (hours === 12) {
    return `12:${minutes} pm`; // Noon case
  } else if (hours > 12) {
    return `${hours - 12}:${minutes} pm`; // Afternoon case
  }
  return `${time} am`; // Morning case
}

// Assertions
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

const currentOutput4 = formatAs12HourClock("00:00");
const targetOutput4 = "12:00 am";
console.assert(
  currentOutput4 === targetOutput4,
  "current output: %s, target output: %s",
  currentOutput4,
  targetOutput4
);

const currentOutput5 = formatAs12HourClock("12:00");
const targetOutput5 = "12:00 pm";
console.assert(
  currentOutput5 === targetOutput5,
  "current output: %s, target output: %s",
  currentOutput5,
  targetOutput5
);
