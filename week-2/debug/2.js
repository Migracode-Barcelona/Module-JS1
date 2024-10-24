// Predict and explain first...

const num = 103;

function getLastDigit(num) {
  return num.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

//Answer:
//The getLastDigit is not working properly because it doesn't have any  argument,
//So since it doesn't have any argument it will keep taking from the variable(103) which was defined out side the function,
//and  will always return 3 when ever the function is being called,
//instead of the values passed in the function,To fix that we have to let getLastDigit accept  "num" as a parameter.
