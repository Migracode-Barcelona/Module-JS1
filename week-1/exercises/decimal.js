const num = 56.5467;

// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )
// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

// Log your variables to the console to check your answers

// ANSWER //

const wholeNumberPart = Math.floor(num); // This will be 56

const decimalPart = num - wholeNumberPart; // This will be 0.5467

const roundedNum = Math.round(num); // This will be 57

console.log("Whole Number Part:", wholeNumberPart); // Output: 56
console.log("Decimal Part:", decimalPart); // Output: 0.5467
console.log("Rounded Number:", roundedNum); // Output: 57
