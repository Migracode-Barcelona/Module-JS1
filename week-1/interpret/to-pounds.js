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

// ANSWER //
/*
---- 1. ----
const penceString = "399p";
  Initializes a string variable named penceString with the value "399p", representing a price in pence.

---- 2. ----
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  Creates a new string penceStringWithoutTrailingP that contains the original pence value without the trailing p.
  substring(startIndex, endIndex) is used to extract characters from penceString starting from index 0 to the second-last character.
  Result in trailing 'p'

---- 3. ----
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  This line adds zeros to the beginning of string penceStringWithoutTrailingP to ensure it has a minimum length of three characters.
  The padStart(targetLength, padString) method fills the beginning of the string with 0 until it reaches a length of 3.

---- 4. ----
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  It extracts the pound portion of the padded pence string and assigns it to the variable pounds.

---- 5. ----
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
It extracts the pence portion and ensures it has exactly two characters, assigning the result to pence.
padEnd(2, "0") ensures that if the string is less than two characters, it pads with zeros to the right.

---- 6. ----
console.log(`£${pounds}.${pence}`);
  Logs outputs the final formatted price in pounds and pence. It uses template literals.

*/
