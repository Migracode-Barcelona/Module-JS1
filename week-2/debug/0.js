// Predict and explain first...

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//Answer:
//There are two argument here, a multiply by b and print the result by  console.log(a * b);
//But when log the multiplication in the template literal will come out undefined

//Prediction:
//The multiplication in the template literal will come out as undefined because it used console log,
//instead of return ,so the final string  will be The result of multiplying 10 and 32 is undefined
//When we use the console log we can see it in the console as The result of multiplying 10 and 32 is 320
//So to correct this, we use return for the multiply function.
