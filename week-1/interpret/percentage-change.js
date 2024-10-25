let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//   5 function calls
/*
LINE 3
LINE 3
LINE 4
LINE 4
LINE 8



*/

// b) Identify all the lines that are variable reassignment statements

//LINE 4 AND LINE 5

// c) Identify all the lines that are variable declarations
//LINE 1,2,7,8

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
/*The expression Number(carPrice.replaceAll(",", "")) is used to convert the string representation of the numbers in quotes, "8,543" and "10,000" ,
 into an actual numerical value without quotes.
*/
