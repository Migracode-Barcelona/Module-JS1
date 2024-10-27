// Predict and explain first...
// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("Hi"));

/* Declaring str with let inside the function causes a SyntaxError because str has already been declared as a parameter of the function */