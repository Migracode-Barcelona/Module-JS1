/* const minimum = 1;
const maximum = 100; */

/* const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; */

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means

/* 1 According to the (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
Math.random() returns a floating-point, pseudo-random number in the range [0, 1). This means the number can be 0 but is less than 1.
 */

/*  2  The expression (maximum - minimum + 1) computes the total number of values possible:
Here, maximum is 100 and minimum is 1. So, 100 - 1 + 1 equals 100. This establishes that the numbers generated will fall within a range of 0 to 99 after scaling. */


/* 3 According to the  (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) 
Math.floor(x) returns the largest integer less than or equal to x. Thus, if the random number generated is, for example, 47.6, Math.floor() will return 47, resulting in a value between 0 and 99. */

/*  4 By adding minimum to the floored value, the final calculation transforms the range from [0, 99] to [1, 100]. This means num can take any integer value from 1 to 100. */

// It will help to think about the order in which expressions are evaluated


// Try logging the value of num several times to build an idea of what the program is doing

const minimum = 1;
const maximum = 100;

for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  
console.log(`Random number ${i + 1}: ${num}`);

}
