// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

const decimalNumber = 0.5;

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log("The percentage of", `${convertToPercentage(decimalNumber)}`);
console.log("The decimal number", `${decimalNumber}`);

//Answer:
// 1.syntaxError because decimalNumber has already been declared
// 2.ReferenceError since decimalNumber was not defined outside the function

//An error will will occur specifically on this line
//console.log(decimalNumber); because decimalNumber was not defined outside the convertToPercentage() function
