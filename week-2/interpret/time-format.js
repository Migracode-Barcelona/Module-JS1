function pad(num) {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
}

function formatTimeDisplay(seconds) {
  const remainingSeconds = seconds % 60;
  const totalMinutes = (seconds - remainingSeconds) / 60;
  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;
  const remainingHours = totalHours % 24;

  return `${pad(remainingHours)}:${pad(remainingMinutes)}:${pad(
    remainingSeconds
  )}`;
}

console.log(formatTimeDisplay(143));

// You can play computer with this example
// Use the Python Visualiser https://pythontutor.com/visualize.html#mode=edit
// to help you answer these questions

// Questions

// a) When formatTimeDisplay is called how many times will pad be called?
/* three times */

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?
/* The first call to pad is with 0 */

// c) What is the return value of pad when it is called for the first time?
/* The return value is "00" because pad(0) adds a "0" before it */

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
/* The last call to pad uses 23 (for seconds). */

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
/* The return value is "23" because pad(23) doesn’t need padding. */

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
