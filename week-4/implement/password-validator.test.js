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

const passwordValidity = require("./password-validator");

test("To test if characters are at least 5 ", function () {
  expect(passwordValidity("Melis")).toBeFalsy;
});

test("To test if at least one English uppercase letter is present", function () {
  expect(passwordValidity("Rose2#")).toBeTruthy;
});

test("To test if at least one English uppercase letter is present", function () {
  expect(passwordValidity("FRANCE@1")).not.toBeTruthy;
});

test("To test if it has at least one number (0-9)", function () {
  expect(passwordValidity("tHelma#")).toBeFalsy;
});

test(" Has at least one symbol", function () {
  expect(passwordValidity("Stella1$")).not.toBeFalsy;
});

test("Must not be any previous password in the passwords array", function () {
  expect(passwordValidity("$Femi565")).toBeFalsy;
});
