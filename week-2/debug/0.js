// Predict and explain first...

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/*
PREDICTION
Undefined for line 7


EXPLANATION
- On Line 3 , is a function with the name multiply  and 2 parameters a and b.
- On line 4, is an argument that consist of  console.log function that 
  prints out a * b.
    Console.log does not return the value.
   To return the value then the keyword return should be used in the function multiply,
   else it will be returned as undefined using console.log

Hence the output will be  `The result of multiplying 10 and 32 is undefined`


CORRECTION



function multiply(a, b) {
 return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);



 */
