// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

function isPrime(num) {
  // Handle numbers less than 2
  if (num < 2) {
    return false;
  }

  // Check for factors from 2 to num-1
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // If num is divisible by i then it is not prime
    }
  }

  return true; // prime number
}

// TESTS

test("2 is prime", () => {
  expect(isPrime(2)).toBe(true);
});

test("4 is not prime", () => {
  expect(isPrime(4)).toBe(false);
});

test("13 is prime", () => {
  expect(isPrime(13)).toBe(true);
});

test("15 is not prime", () => {
  expect(isPrime(15)).toBe(false);
});

// Test for negative numbers
test("returns false for negative number -7 (not prime)", () => {
  expect(isPrime(-7)).toBe(false);
});

// Test for larger prime number
test("returns true for large prime number 97", () => {
  expect(isPrime(97)).toBe(true);
});

// Test for larger non-prime number
test("returns false for large non-prime number 100", () => {
  expect(isPrime(100)).toBe(false);
});
