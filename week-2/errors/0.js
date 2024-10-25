// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

/* 
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("priscie");

*/

/*
PREDICTION
 There will be an error due to declaring the variable str  again inside the function. 
 str is both a parameter and a variable inside the function, 
 JavaScript will throw an error because it is not to redeclare a parameter as a new variable in the same scope.


 // write down the error you predict will be raised
   SyntaxError: Identifier 'str' has already been declared



*/

function capitalise(str) {
  let stringCapitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return stringCapitalised;
}

console.log(capitalise("zoe"));
