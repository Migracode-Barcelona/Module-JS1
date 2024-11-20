// When selling goods, most are subject to the 20% standard rate of VAT.
// You must add 20% to the price you charge for the goods.
// You can do this by multiplying the price you charge by 1.2.
// For example, if your business sells sports equipment for £50, you multiply £50 by 1.2 for a total VAT inclusive price of £60.

// Implement a function that calculates the new price with VAT (Value Added Tax) added on.

// Given a number,
// When I call this function with a number
// Then it returns the new price with VAT added on
// Function to calculate price with VAT
function calculatePriceWithVAT(price) {
    // Check if the input is valid (price should not be negative or missing)
    if (price < 0) {
        return "Error: Price must be a positive number!";
    }

    // Multiply the price by 1.2 to add 20% VAT
    const newPrice = price * 1.2;

    // Round the result to 2 decimal places
    return newPrice.toFixed(2);
}

// Test the function
console.log(calculatePriceWithVAT(50)); // Should print "60.00"
console.log(calculatePriceWithVAT(100)); // Should print "120.00"
console.log(calculatePriceWithVAT(0));   // Should print "0.00"
console.log(calculatePriceWithVAT(-10)); // Should print an error message
