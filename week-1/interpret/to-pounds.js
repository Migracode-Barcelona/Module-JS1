const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
/*  2 const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
Removes the trailing "p" from the string. Result: "399". */

 /* 3 const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
Pads the string "399" to ensure it has at least 3 characters, but since it already has 3, it remains "399". */

/*  4 const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
Extracts the pound portion by taking all characters except the last two. Result: "3". */

 /* 5 const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
Extracts the last two characters as pence. If there’s only one character, it pads to 2, but here it becomes "99". */

/* 6 console.log(£${pounds}.${pence});
Outputs the formatted price in pounds, resulting in "£3.99". */
