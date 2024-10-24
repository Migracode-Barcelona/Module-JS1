// Predict and explain first...
// this function should square any number but instead we're going to get an error
// what is happening? How can we fix it?

function square(num) {
  return num * num;
}

console.log(square(3));
console.log(square(6));
console.log(square(9));

//Answer:
//The reason the program won't run is because we used a wrong parameter, 3 is not allowed because,
//javascript interpret 3 as a number,
// for parameters we can either us a, b , num etc.
