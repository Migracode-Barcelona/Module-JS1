//This function validates a card based on the following conditions.
// Number must be 16 digits, all of them must be numbers.
//You must have at least two different digits represented (all of the digits cannot be the same).
//The final digit must be even.
//The sum of all the digits must be greater than 16.

//Function is called cardValidity with parameter cardNumber
function cardValidity(cardNumber) {
  //declared variable cardString converts cardNumber to a String
  const cardString = cardNumber.toString();

  // This condition checks if the length is exactly 16 digits if not it returns false
  if (cardString.length !== 16) {
    return false;
  }

  // Below cause a unique set of numbers without repeating the same number throughout
  const noRepeatedSingleNumber = new Set(cardString);

  //Ternary operator that returns false is the condition below applies
  noRepeatedSingleNumber.size === 1 ? false : true;

  //It targets the last digit of the string and creates a condition for false if it is 0
  const lastDigit = cardString.charAt(15);
  if (lastDigit == 0) {
    return false;
  }
  //targets the last digit of the card number and checks if it is even
  const lastValueIsAnEvenNumber = parseInt(cardString.charAt(15), 10);
  if (lastValueIsAnEvenNumber % 2 !== 0) {
    return false;
  }
  //checks if all characters in the the new array are all the characters are numbers.
  const newString = Array.from(cardString).every((char) => !isNaN(char));
  if (newString !== true) {
    return false;
  }

  //converts all the characters to numbers
  const sumOfAllNumbers = Array.from(cardString).map((char) => parseInt(char));

  //sums all the numbers in the array
  let sum = 0;
  for (let i = 0; i < sumOfAllNumbers.length; i++) {
    sum += sumOfAllNumbers[i]; // Sum all the numbers in the array
  }

  // checks if the sum is less than 16
  if (sum < 16) {
    return false;
  }

  //this returns true if all the above statement  does not count

  // If all conditions are met, return true
  else {
    return true;
  }
}
