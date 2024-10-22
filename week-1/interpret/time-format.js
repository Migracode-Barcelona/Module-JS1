const movieLength = 8784; // length of movie in seconds

const remainingSeconds = movieLength % 60;
const totalMinutes = (movieLength - remainingSeconds) / 60;

const remainingMinutes = totalMinutes % 60;
const totalHours = (totalMinutes - remainingMinutes) / 60;

const remainingHours = totalHours % 24;

const result = `${remainingHours}:${remainingMinutes}:${remainingSeconds}`;
console.log(result);

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?
//Answer: 7 variable declaration

// b) How many function calls are there?
//Answer: 1

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents
//Answer:movieLength % 60 represents how many seconds are left after converting the total movie length into minutes.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
//Answer:it subtracts the movie length from the remaining seconds and then divide it by 60 to get the total minutes.

// e) What do you think the variable result represents? Can you think of a better name for this variable?
//Answer:it represents the total time, i think a better name will be totalTime.

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
//Answer:
//This program might not work for all values of movieLength.
//Negative value and Zero can lead to invalid or unexpected result.
//The program should handle these cases more gracefully, possibly by adding checks to return an error message or a more meaningful output.
//Very large value.
