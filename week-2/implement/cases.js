// A set of words can be written grouped together in different cases.

// For example, "hello there" in snake case would be written "hello_there"
// UPPER_SNAKE_CASE means taking a string and writing it in all capitals with underscores for spaces

// Implement a function that:

// Given a string input like "hello there"
// When we call this function with the input string
// Then it returns the string in UPPER_SNAKE_CASE, so "HELLO_THERE"

// Test case: we expect "lord of the rings" to be "LORD_OF_THE_RINGS"
// Test case: we expect "the great gatsby" to be "THE_GREAT_GATSBY"
// Test case: we expect "the da vinci code" to be "THE_DA_VINCI_CODE"

// Come up with a clear, simple name for the function
// Use the string documentation to help you plan your solution
function toUpperSnakeCase(input) {
    // Step 1: Convert the string to uppercase
    const upperCaseString = input.toUpperCase();

    // Step 2: Replace spaces with underscores
    const snakeCaseString = upperCaseString.replace(/ /g, "_");

    // Step 3: Return the result
    return snakeCaseString;
}

// Test Cases
console.log(toUpperSnakeCase("lord of the rings"));   // Expected: "LORD_OF_THE_RINGS"
console.log(toUpperSnakeCase("the great gatsby"));    // Expected: "THE_GREAT_GATSBY"
console.log(toUpperSnakeCase("the da vinci code"));   // Expected: "THE_DA_VINCI_CODE"
