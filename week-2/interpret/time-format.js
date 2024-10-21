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
// Answer: It will be called three times. Because it is called once for each: hours, minutes, and seconds.

// Call formatTimeDisplay with an input of 143, now answer the following:

// b) What value is assigned to the parameter num when pad is called for the first time?
// Answer: First time the value assigned to num is 0 for 'remainingHours'.

// c) What is the return value of pad when it is called for the first time?
// Answer: First time num = 0 which is going to be '00'.

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
// Answer: The value assigned to num when pad is called for the last time is 23 (for remainingSeconds). This is the last value to be formatted before the function returns.

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
// Answer: The return value is '23'. It is a two-digit number, so it does not need a leading zero.

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
// Answer: String.prototype.padStart() method can be used alternatively.
