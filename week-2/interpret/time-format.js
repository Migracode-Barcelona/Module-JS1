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
//Answer:3 times

// Call formatTimeDisplay with an input of 143, now answer the following:
// b) What value is assigned to the parameter num when pad is called for the first time?
//Answer: 00 since there is no full hours

// c) What is the return value of pad when it is called for the first time?
//Answer: The return value of the pad when its called for the first time is 00

// d) What is the value assigned to the parameter num when pad
// is called for the last time in this program?  Explain your answer
//Answer : 23 , is the valued assigned to the parameter because its the value of the seconds.

// e) What is the return value when pad is called
// for the last time in this program?  Explain your answer
//Answer : 23 , The last pad returns the 23 because its a 2-digit number so the function does not add 0 to it.

// f) Research an alternative way of padding the numbers in this code.
// Look up the string functions on mdn
//Answer: instead of using the pad function we can use the String prototype padStart(), it is an in-build function
