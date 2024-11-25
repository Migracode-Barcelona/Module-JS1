// Below are the steps to calculate BMI for an adult

// The BMI calculation divides an adult's weight in kilograms (kg) by their height in metres (m) squared.

// For example, if you weigh 70kg (around 11 stone) and are 1.73m (around 5 feet 8 inches) tall, you work out your BMI by:

// squaring your height: 1.73 x 1.73 = 2.99
// dividing 70 by 2.99 = 23.41
// Your result will be displayed to 1 decimal place, for example 23.4.

// Implement a function that calculates the BMI of someone using their weight and height

// Given someone's weight in kg and height in metres
// When we call this function with the weight and height
// Then it returns their Body Mass Index to 1 decimal place
function calculateBMI(weight, height) {
    // Validate inputs: weight and height must be positive numbers
    if (weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        throw new Error("Invalid input: Weight and height must be positive numbers.");
    }

    // Calculate BMI
    const bmi = weight / (height * height);

    // Return BMI rounded to 1 decimal place
    return parseFloat(bmi.toFixed(1));
}

// Example usage
console.log(calculateBMI(70, 1.73)); // Expected: 23.4
console.log(calculateBMI(80, 1.8));  // Expected: 24.7
console.log(calculateBMI(50, 1.6));  // Expected: 19.5
