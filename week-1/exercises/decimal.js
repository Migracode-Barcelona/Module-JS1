
const num = 56.5467;




// You should look up Math functions for this exercise https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Create a variable called wholeNumberPart and assign to it an expression that evaluates to 56 ( the whole number part of num )
const wholeNumberPart = Math.floor(num);
console.log("Whole Number Part:", wholeNumberPart);

// Create a variable called decimalPart and assign to it an expression that evaluates to 0.5467 ( the decimal part of num )

const decimalPart = num - wholeNumberPart;
console.log("Decimal Part:", decimalPart); 

// Create a variable called roundedNum and assign to it an expression that evaluates to 57 ( num rounded to the nearest whole number )

const roundedNum = Math.round(num);
console.log("Rounded Number:", roundedNum); 

// Log your variables to the console to check your answers
