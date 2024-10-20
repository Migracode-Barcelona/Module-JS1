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

// b) How many function calls are there?

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// f) Think about whether this program will work for all values of movieLength.
//    Think of what values may cause problems for the code.
//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?

// ANSWER //
/*
---- a) Variable Declarations ----
  There are 6 variable declarations in this program:
    const movieLength = 8784;
    const remainingSeconds
    const totalMinutes
    const remainingMinutes
    const totalHours
    const remainingHours
    const result


---- b) Number of Function Calls ----
  There are 0 function calls in this program.


---- c) Expression movieLength % 60 ----
  It calculates the remainder when movieLength (in seconds) is divided by 60.

  This operation determines the number of seconds that remain after converting movieLength into whole minutes. In this case, it tells you how many seconds are left.


---- d) Interpretation of Line 4 ----
  It calculates the remaining minutes after converting totalMinutes into whole hours.


---- e) Interpretation of result ----
`result` represents the formatted time of the movie in the format HH:MM:SS
Better Name: movieTime


---- f) Testing for Values of movieLength ----
  Problems:
    If movieLength is negative (e.g., -1000), it will produce negative hours and minutes, which doesn't make sense.
    const movieLength = -1000; // Negative length

    If movieLength is less than 60, it will still provide a valid output, but remainingHours and remainingMinutes will be 0, and only remainingSeconds will show the correct value. For example:
    const movieLength = 30; // Less than a minute

    If movieLength value is large (e.g., 1000000000), it will still calculate the result, but the hours could exceed unrealistically for movie lengths.
    const movieLength = 1000000000; // Very large length

*/
