const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // 399

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // 399
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // 3

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // 99

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step
// You should use MDN to look up substring, padStart and padEnd to interpret this program

// To begin, we can start with

// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP penceString.substring(0, penceString.length - 1): returns numeric part of value
// 3. const paddedPenceNumberString  = penceStringWithoutTrailingP.padStart(3, "0"): adds "0" before given value for the length of 3 digits
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): returns the part of string between begin and 1 digit - "3"
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): gets the first digit of number and adds "00" at the end
