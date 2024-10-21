// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

//Solution
const num = 56.5467;
let wholeNumberPart = Math.floor(num); //The Math.floor will round it to the nearest whole number
let decimalPart = num - wholeNumberPart; // will subtract the wholeNumberPart from the original number
let roundedNum = Math.round(num); // will round it up to the nearest integer
console.log("whole number part", wholeNumberPart);
console.log("decimal part", decimalPart);
console.log("rounded number", roundedNum);
