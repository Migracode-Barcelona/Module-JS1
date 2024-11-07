// Given a positive integer num,
// When the isPrime function is called with num as input,
// Then it should return a boolean representing whether the num is prime

//solution
function isPrime(num) {
  if (num <= 1) {
    return false; // 0 and 1 is not a prime number
  }
  if (num === 2) {
    return true; // 2 is a prime number
  }
  if (num % 2 === 0) {
    return false; //Any even number greater than 2 is not a prime number
  }
  const limit = Math.sqrt(num); // we are looking for the square root of a number
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(4)); // false
console.log(isPrime(17)); // true
console.log(isPrime(25)); // false
console.log(isPrime(29)); // true
console.log(isPrime(100)); // false

//test.js
test("should return true for prime numbers", () => {
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(7)).toBe(true);
  expect(isPrime(11)).toBe(true);
  expect(isPrime(13)).toBe(true);
});

test("should return false for non-prime numbers", () => {
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(6)).toBe(false);
  expect(isPrime(9)).toBe(false);
  expect(isPrime(25)).toBe(false);
});
