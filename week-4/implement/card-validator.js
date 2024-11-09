function cardValidation(cardNumber) {
  //To check if the card is exactly 16 and if its not a number

  if (cardNumber.length !== 16 || isNaN(cardNumber)) {
    return false;
  }

  //To check if the number is a unique number and has at least two different digit
  if (new Set(cardNumber).size === 1) {
    return false;
  }
  // To check if the last digit is odd (if it is, return false)
  if (parseInt(cardNumber[cardNumber.length - 1]) % 2 !== 0) {
    return false; // Reject if the last digit is odd
  }
  const sum = cardNumber
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0);
  // split('') => splits the string into an array
  //reduce((acc,digit)) => is a callback function with two argument acc -> accumulates the value as the function
  //iterates through the loop, digit  is the current element being processed.
  if (sum <= 16) {
    return false;
  }
  return true;
}
console.log(cardValidation("9999777788888000")); //true
console.log(cardValidation("1234567890123456")); //true
console.log(cardValidation("1111111111111111111")); //false
console.log(cardValidation("1122112211221122")); //true
console.log(cardValidation("123456789abcdefg")); //false
