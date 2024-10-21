// Predict and explain first...
/*
const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
*/

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// ANSWER //
// The function getLastDigit() does not have any parameters. It always refers to the global variable num, which is set to 103. Therefore, it is called getLastDigit(42), getLastDigit(105), or getLastDigit(806), the function will always return the last digit of 103, which is 3.

// To fix
// we simply add parameter to the function
const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);
