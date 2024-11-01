function formatAs12HourClock(time) {
  if (Number(time.slice(0, 2)) > 12) {
    let hours = Number(time.slice(0, 2)) - 12;
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

/*Assertion failed: current output: 5:00 pm, target output: 5:42 pm.This because the 
equality sign is a strict equality and the value on both sides are not equal.
current output doesn't display the minutes shown in the target output.
 Instead of 5:42 pm it displays 5:00pm. 

*/

// c) Now fix the bug and re-run all your assertions
