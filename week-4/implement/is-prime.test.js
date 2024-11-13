// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime
const isPrime = require("./is-prime");

test("Check if 1 is prime", function () {
  expect(isPrime(1)).toBeFalsy;
});

test("Check if 2 is prime", function () {
  expect(isPrime(2)).toBeTruthy;
});

test("Check if 101 is prime", function () {
  expect(isPrime(101)).toBeTruthy;
});

test("Check if 17 is prime", function () {
  expect(isPrime(17)).toBeTruthy;
});

test("Check if 79 is prime", function () {
  expect(isPrime(79)).not.toBeFalsy;
});

test("Check if 100 is prime", function () {
  expect(isPrime(100)).toBeFalsy;
});
