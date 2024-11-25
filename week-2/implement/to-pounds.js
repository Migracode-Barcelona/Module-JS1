// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs
// Step 1: Declare the function
function toPounds(kilograms) {
    // Step 2: Convert kilograms to pounds using the conversion factor
    const pounds = kilograms * 2.20462;

    // Step 3: Return the result, rounded to 2 decimal places
    return pounds.toFixed(2);
}

// Step 4: Test the function with different inputs
console.log(toPounds(1));     // Expected: 2.20
console.log(toPounds(5));     // Expected: 11.02
console.log(toPounds(10));    // Expected: 22.05
console.log(toPounds(50));    // Expected: 110.23
console.log(toPounds(0));     // Expected: 0.00
