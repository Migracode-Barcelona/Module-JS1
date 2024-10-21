// Predict and explain first...
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// ANSWER //

// Expected
// The function multiply(10, 32) is called, which calculates 10 * 32. Inside the function, it uses console.log(a * b) to log the result of the multiplication directly to the console.
// The multiply function does not have a return statement, which means it will return undefined by default after execution.
// console.log outside of function attempts to log the string with the value returned from the multiply function. Which will display "undefined"

// Correct version
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
