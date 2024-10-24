// Predict and explain first...

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

//Answer:
//It will give an early return, because the return will run first before the a + b sum,
//Because of the semi-colon, To fix that we have to remove the semi-colon.
