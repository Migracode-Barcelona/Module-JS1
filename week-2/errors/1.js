// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
*/

// ANSWER //

// An error will occur 'decimalNumber' is being redeclared. Specifically, the line const decimalNumber = 0.5; attempts to declare decimalNumber again within the same scope where it is already defined as a parameter of the function. It will result in a SyntaxError.

// The error occurs because the function tries to declare a variable with the same name as an existing parameter. We can't declare a variable with const/let that has the same name as a parameter in the same scope.

function convertToPercentage(decimalNumber) {
  // const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // Output: "50%"
