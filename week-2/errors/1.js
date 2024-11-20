// Predict and explain first...
//The variable decimalNumber is declared within the function scope (using const) and is not accessible outside of it. This creates a scope conflict when trying to access decimalNumber globally.



// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);
