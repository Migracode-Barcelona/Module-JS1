// Predict and explain first...

const num = 103;

function getLastDigit(Number) {
  return Number.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem
//The issue lies in the num variable. num is declared as a constant (const num = 103) outside the function. Inside the getLastDigit function, it tries to use this constant num instead of the value passed to the function when it is called (like getLastDigit(42)).
