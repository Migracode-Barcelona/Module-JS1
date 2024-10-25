// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

/*
PREDICTION
`The sum of 10 and 32 is undefined `


EXPLANATION
On line 3 is a function with the name sum and 2 parameters and b.
On line 4 starts the argument with the keyword return with a semicolon at the end
In Javascript since return is followed by a new line it automatically inserts a  semicolon and 
stops reading without executing the expression  and returns as undefined.
On line 5 is a sum of a and b with the + operator and a semicolon at the end also
The argument is closed on line 6.
Line 8 has then console.log function with a template literal and a placeholder of the function name sum and parameters 10 and 32.
This will log as The sum of 10 and 32 is undefined

To fix look below


function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


*/
