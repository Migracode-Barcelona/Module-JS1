let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made

// b) Identify all the lines that are variable reassignment statements

// c) Identify all the lines that are variable declarations

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?

// ANSWER //
/*
---- a) Function Calls ----
There are four function calls:
  1. Line 4: `replaceAll(",", "")` - It replaces all occurrences of `,` in `carPrice`.
  2. Line 4: `Number(...)` - This function converts the string (result of `replaceAll`) into a number.
  3. Line 5: `replaceAll(",", "")` - It replaces all occurrences of `,` in `priceAfterOneYear`.
  4. Line 5: `Number(...)` - This function converts the string (result of `replaceAll`) into a number.


---- b) Variable Reassignment Statements ----
Two lines have variable reassignment statements:
  1. Line 4: `carPrice = Number(carPrice.replaceAll(",", ""));`
  2. Line 5: `priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));`


---- c) Variable Declarations ----
Declaration of variables are on four lines:
  1. Line 1: let carPrice = "10,000";
  2. Line 2: let priceAfterOneYear = "8,543";
  3. Line 7: const priceDifference = carPrice - priceAfterOneYear;
  4. Line 8: const percentageChange = (priceDifference / carPrice) * 100;


---- d) Explanation of the Expression ----
  1. carPrice.replaceAll(",", ""):
    - This part calls the `replaceAll` method on the string `carPrice` (which is "10,000").
    - It replaces all occurrences of the comma ',' with an empty string `""`, that results in "10000".

  2. Number(...):
    - The `Number` function is called to convert the string "10000" into a number type `10000`.

Purpose of the Expression:
  The purpose of this expression is to convert the string representation of the car price into a number format that can be used for mathematical calculations.

*/
