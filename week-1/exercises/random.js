const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
//num represent any random number between 1-100  

// Try breaking down the expression and using documentation to explain what it means
//Math.random  generates a random number but decimal number
//the line cod3 generally breaks down a random integer between minimun and maximum 

// It will help to think about the order in which expressions are evaluated
//it will first multiply the range 
//the generate random decimal 
//multiply the random decimal by the range
//use Math.floor to rounddown to the nearest whole Number
//lastly add minimum 

// Try logging the value of num several times to build an idea of what the program is doing
//it shows different randon number each time i logg
