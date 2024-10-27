// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on


/* The interpreter sees decimalNumber as a parameter in the function. 
When it finds another decimalNumber declared with const, it raises a SyntaxError, stopping the function from running. 
Also, the console.log(decimalNumber); line raises a ReferenceError because decimalNumber isn’t defined outside the function. */

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

