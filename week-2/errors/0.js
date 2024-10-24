// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log("string input", `${capitalise("I am happy")}`);

//Answer:
// Identifier 'str' has already been declared
//There's no need declaring it again.
//When you fix the syntax error, a Reference error appears because it will try to access str outside the function
//where it was not defined.
