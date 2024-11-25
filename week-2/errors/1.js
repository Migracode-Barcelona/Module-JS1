// Predict and explain first...
//The variable decimalNumber is declared within the function scope (using const) and is not accessible outside of it. This creates a scope conflict when trying to access decimalNumber globally.

// Write down the error you predict will be raised
const decimalNumber = 0.5;
console.log(decimalNumber);


// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
    const percentage = `${decimalNumber * 100}%`;
    return percentage;
}

// Call the function and log the result
console.log(convertToPercentage(0.5)); // Outputs: "50%"
