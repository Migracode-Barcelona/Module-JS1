let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
//Answer:
//There are 5 function calls
//1.In line 4(There are two function here)
//2.In line 5(There are two function here)
//3.In line 10

// b) Identify all the lines that are variable reassignment statements
//Answer:
//line 4 and 5

// c) Identify all the lines that are variable declarations
//Answer:
//line 1,2,7,8

// d) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
//Answer:
//The expression is reassigning the string with a new string, so we are replacing Number(carPrice.replaceAll(",","")) with a new string.
