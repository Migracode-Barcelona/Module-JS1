const minimum = 1;
const maximum = 100;

for (let i = 0; i < 10; i++) {
  const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  console.log(`Random number ${i + 1}:`, num);
}

// In this exercise, you will need to work out what num represents?
//Answer:
//num represents the integer 1-100

// Try breaking down the expression and using documentation to explain what it means
//Answer:
//Math.floor rounds down the number to the nearest whole number
//Math.random generate a pseudo-random floating-point number between 0 and 1
//maximum-minimum calculates the range of number you want to include
//+minimum we add the so the result is within our desired range.

// It will help to think about the order in which expressions are evaluated
// Try logging the value of num several times to build an idea of what the program is doing
