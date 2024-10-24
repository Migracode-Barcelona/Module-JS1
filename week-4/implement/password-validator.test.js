/*
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array.

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/

function isValidPassword(password, previousPasswords) {
  // Validate length
  if (password.length < 5) return false;

  // Validate character types
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!#$%.&*]/.test(password);

  // Validate uniqueness
  const isUnique = !previousPasswords.includes(password);

  return hasUpper && hasLower && hasNumber && hasSymbol && isUnique;
}

// TESTS

const previousPasswords = ["Passw0rd!", "12345", "OldPassword1!"];

// Test cases using Jest
test("Valid password should return true", () => {
  expect(isValidPassword("Valid1!", previousPasswords)).toBe(true);
});

test("Password without uppercase letter should return false", () => {
  expect(isValidPassword("valid1!", previousPasswords)).toBe(false);
});

test("Password without lowercase letter should return false", () => {
  expect(isValidPassword("VALID1!", previousPasswords)).toBe(false);
});

test("Password without a number should return false", () => {
  expect(isValidPassword("ValidPassword!", previousPasswords)).toBe(false);
});

test("Password without special character should return false", () => {
  expect(isValidPassword("Valid1Password", previousPasswords)).toBe(false);
});

test("Password matching previous password should return false", () => {
  expect(isValidPassword("Passw0rd!", previousPasswords)).toBe(false);
});

test("Password matching previous password should return false", () => {
  expect(isValidPassword("OldPassword1!", previousPasswords)).toBe(false);
});

test("Very short password should return false", () => {
  expect(isValidPassword("P1!", previousPasswords)).toBe(false);
});

test("Password with all criteria, including a symbol, should return true", () => {
  expect(isValidPassword("Valid$Pass1", previousPasswords)).toBe(true);
});

test("Password with all criteria, including a symbol, should return true", () => {
  expect(isValidPassword("Um@!rR!@z999", previousPasswords)).toBe(true);
});
