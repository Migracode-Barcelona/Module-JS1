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

/* There are 6 variable declarations in the program */


// b) How many function calls are there?

/* theres no functions  */

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

/* The expression movieLength % 60 calculates the remainder when movieLength (which is in seconds) is divided by 60.  */

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

/* Line 4 calculates total minutes by converting seconds to minutes: totalMinutes = (movieLength - remainingSeconds) / 60. */

// e) What do you think the variable result represents? Can you think of a better name for this variable?

/* The variable result represents the formatted movie duration in HH:MM
. A better name could be formattedMovieLength or movieDuration */

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?

/* Negative Values: Yields nonsensical results.
Very Large Values: Works but may not represent valid time correctly */