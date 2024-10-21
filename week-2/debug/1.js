// Predict and explain first...
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/

// ANSWER //

// 'return;' on the first line inside the function. This statement immediately exits the function and returns undefined.
// The line a + b; that follows is unreachable code because it comes after the return statement. As a result, it will not be executed.
// Since there is no value returned from the function, the function will return undefined.

// The sum of 10 and 32 is undefined

// Correct version
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
