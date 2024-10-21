const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

/*
Math.random() generates a random number between 0 and 1.
Math.random() * 100 stretches that number to between 0 and 100.
Math.floor() rounds it down to an integer between 0 and 99.
Adding minimum shifts the range to between 1 and 100 (inclusive).
*/

console.log(num); // 77
console.log(num); // 36
console.log(num); // 46
console.log(num); // 79
console.log(num); // 9
