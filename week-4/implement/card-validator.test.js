function validateCreditCard(cardNumber) {
  // it checks if card has 16 digits and contains only numbers
  if (cardNumber.length !== 16 || isNaN(cardNumber)) return false;

  // Convert to an array of numbers
  const digits = cardNumber.split("").map(Number);

  // Checking if there are at least two different digits
  if (new Set(digits).size === 1) return false; // All digits are the same

  // Checking if the last digit is even
  if (digits[15] % 2 !== 0) return false; // Last digit is not even

  // Checking if the sum of the digits is greater than 16
  const sum = digits.reduce((acc, digit) => acc + digit, 0); // Sum the digits
  if (sum <= 16) return false; // Sum is not greater than 16

  return true; // The card number is valid
}

// Tests

test("Valid credit card numbers should return true", () => {
  expect(validateCreditCard("9999777788880000")).toBe(true);
  expect(validateCreditCard("6666666666661666")).toBe(true);
});

test("Invalid credit card numbers should return false", () => {
  expect(validateCreditCard("a92332119c011112")).toBe(false); // Invalid characters
  expect(validateCreditCard("4444444444444444")).toBe(false); // Only one type of digit
  expect(validateCreditCard("1111111111111110")).toBe(false); // Sum of digits < 16
  expect(validateCreditCard("6666666666666661")).toBe(false); // Last digit not even
});

test("Card numbers that are not 16 digits long should return false", () => {
  expect(validateCreditCard("123456789012")).toBe(false); // Less than 16 digits
  expect(validateCreditCard("12345678901234567890")).toBe(false); // More than 16 digits
});
