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
// 2.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); : This line removes the trailing "p" from the penceString.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); :This line pads the string penceStringWithoutTrailingP
//with leading zeros to ensure it has a minimum length of 3.
// 4.const pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2); :This line extracts the pound part from the padded pence string.
// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) .padEnd(2, "0"); :This line extracts the last two characters of
//paddedPenceNumberString, which represent the pence part.
// 6.console.log(`£${pounds}.${pence}`); :This line logs the formatted price in pounds and pence to the console.
