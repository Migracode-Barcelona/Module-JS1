// Predict and explain first...

const num = 103;

function getLastDigit() {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

/*
PREDICTION
All the last digits of values in console.log will be 3.

EXPLANATION

Since the declare variable is not in the local scope but in the global scop and is not
placed as a parameter in the function.
Console.log will treat num as 103 always.


CORRECTION

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`); // 2
console.log(`The last digit of 105 is ${getLastDigit(105)}`);// 5
console.log(`The last digit of 806 is ${getLastDigit(806)}`);// 6




*/
