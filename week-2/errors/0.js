// Predict and explain first...

//The function takes a string str as input and attempts to capitalize the first character of the string using:
//Possible error: If str is empty ("") or not a string (e.g., null or undefined), then str[0] will either be undefined or nonexistent. Calling .toUpperCase() on undefined will result in a TypeError.

// write down the error you predict will be raised
// then call the function capitalise with a string input
// interpret the error message and figure out why it's happening, if your prediction was wrong

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
