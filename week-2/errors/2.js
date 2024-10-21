// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

/*
function square(3) {
    return num * num;
}
*/

// ANSWER //
// The function 'square' is defined with a parameter named 3, which is not a valid parameter name. Parameter names cannot start with a number or consist solely of numbers. Trying to define a function in such a way will cause a SyntaxError.
// SyntaxError: Unexpected number

// To fix
// We can use valid parameter name.
function square(num) {
  return num * num;
}

console.log(square(3));
