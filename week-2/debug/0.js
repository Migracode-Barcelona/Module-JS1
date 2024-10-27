// Predict and explain first...

/* the console.log inside the function prints 320 but doesn’t actually return the value, which leads to undefined in the final output. */

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
