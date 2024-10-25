// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

/*
function square(3) {
    return num * num;
}
    */

/*
PREDICTION 

The parameter in the function is going to display a SyntaxError: Unexpected number in the output.
This is because 3 is not a valid parameter name.
To fix this code by replacing  3 with num which is a valid parameter name.
Call the function and put the value of 3 as a parameter.
console.log  to display results on the console.


*/

function square(num) {
  return num * num;
}

console.log(square(3));
