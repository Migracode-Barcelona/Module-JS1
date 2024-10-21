// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// ANSWER //

// The `let` keyword is used to declare a new variable named str, but str is already defined as a parameter of the function. This results in a conflict because we cannot declare a variable with the same name as a parameter within the same scope.

// Function call
console.log(capitalise("umair"));

// Error message
// SyntaxError: Identifier 'str' has already been declared
// The error message indicates that there is a declaration conflict with the identifier str. We can't redeclare a variable that has already been declared in the same scope.
