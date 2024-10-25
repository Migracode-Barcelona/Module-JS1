// Predict and explain first...
// Write down the error you predict will be raised
// Why will an error occur when this program runs?
// Play computer with the example to work out what is going on

/*
function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/*


PREDICTION
it will throw in an error because, decimalNumber is being declared twice in the same local scope which is the 
function convertToPercentage.
In order for this function to work properly we need to delete line 7 which has a re-declaration of decimalNumber


 Write down the error you predict will be raised  
SyntaxError: Identifier 'decimalNumber' has already been declared


Why will an error occur when this program runs

Because decimalNumber is being repeated the local scope of function convertToPercentage twice as a 
variable and a parameter.

PLAYING COMPUTER

LINE 7 - The function convertToPercentage has a parameter decimalNumber
LINE 8 - opens an argument for function  convertToPercentage which consist of 
       a re-declaration of decimalNumber and assignment to 0.5 which will throw an error
           
       SyntaxError: Identifier 'decimalNumber' has already been declared

 SO I NEED TO DELETE THE VARIABLE decimalNumber      

*/

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

/* NOW THAT THE VARIABLE HAS BEEN REMOVED
LINE 9 - a string containing a placeholder of `${decimalNumber * 100}%` is assigned to the variable percentage

LINE 11 - The return keyword is used to return the result of the evaluated expression.

LINE 14 - a function call  is made with the decimalNumber parameter with value 0.5 and the result is logged on the console
 with the console.log function



*/
