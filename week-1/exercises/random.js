const minimum = 1;
const maximum = 100;

// logging multiple times to see various results
for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  console.log(num);
}

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing

// ANSWER //
/*
1. Math.random() generates a floating-point number between 0 (including) and 1 (excluding).

2. maximum - minimum + 1 (which equals 100) defines the range of numbers we want.

3. Math.random() * (maximum - minimum + 1) scales this to a value between 0 and 100.

4. Math.floor() rounds this down to an integer between 0 and 99.
Adding minimum (which is 1) shifts the range to 1 to 100.

*/
