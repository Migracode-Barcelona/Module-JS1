function formatMovieLength(movieLength) {
  if (movieLength < 0) {
    return "Invalid";
  }

  movieLength = Math.floor(movieLength);

  const remainingSeconds = movieLength % 60;
  const totalMinutes = (movieLength - remainingSeconds) / 60;

  const remainingMinutes = totalMinutes % 60;
  const totalHours = (totalMinutes - remainingMinutes) / 60;

  const remainingHours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);

  const formatWithLeadingZeros = (num) => String(num).padStart(2, "0");

  let result = "";
  if (totalDays > 0) {
    result += `${totalDays} day${totalDays > 1 ? "s" : ""} `;
  }
  result += `${formatWithLeadingZeros(remainingHours)}:${formatWithLeadingZeros(
    remainingMinutes
  )}:${formatWithLeadingZeros(remainingSeconds)}`;

  return result;
}

// Test cases

console.log(formatMovieLength(90000)); // "1 day 01:00:00"
console.log(formatMovieLength(-500)); //  "Invalid "
console.log(formatMovieLength(9000.5)); //  "02:30:00"
console.log(formatMovieLength(1)); //  "00:00:01"
console.log(formatMovieLength(0)); //  "00:00:00"

// For the piece of code above, read the code and then answer the following questions

// a) How many variable declarations are there in this program?

//6 variable declarations

// b) How many function calls are there?
// 1 function call

// c) Using documentation on MDN, explain what the expression movieLength % 60 represents

// The expression movieLength % 60 uses the modulus operator (%).It calculates the remainder when movieLength is divided by 60.

// d) Interpret line 4, what does the expression assigned to totalMinutes mean?
// It subtracts the extra seconds from the total time.This extra seconds are divided by 60 to convert to minutes

// e) What do you think the variable result represents? Can you think of a better name for this variable?

// The variable result is a string that represents the converted time in hours, minutes, and seconds.
//HoursMinutesAndSeconds

// f) Think about whether this program will work for all values of movieLength.
//   It doesn't work for all values

//    Think of what values may cause problems for the code.
// negative values and small values.It changes the format.

//    Decide the result should be for those values, then test it out.
//    Can you find any values of movieLength which don't give you what you'd expect?
// 100,000
// 15
// -20
