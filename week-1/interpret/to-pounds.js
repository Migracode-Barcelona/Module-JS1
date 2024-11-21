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

// 1. const penceString = "399p": initializes a string variable with the value "399p"
// 3. The substring(0, penceString.length - 1) extracts everything from the beginning of the string (index 0) up to the second-to-last character (length - 1), effectively removing the "p".
// 8. The padStart(3, "0") method ensures that the string has a minimum length of 3 characters by adding leading zeros if necessary.
// 9. The substring(0, paddedPenceNumberString.length - 2) takes the portion of the string from the beginning (index 0) to two characters before the end.
// 14 It extracts the last two characters, which represent the pence.It ensures that the pence value has exactly 2 digits by adding zeros if necessary.
// 18 This line prints the result by combining the pounds and pence parts into a string that looks like a price in pounds.
