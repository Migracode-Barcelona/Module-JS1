function repeat(str, count) {
  const positiveIntegerCount = Math.abs(count);

  if (count === positiveIntegerCount) {
    // When count is a positive integer, repeat the string
    return str.repeat(positiveIntegerCount);
  } else if (count === 1) {
    // If count is exactly 1, return the string as is
    return str;
  } else if (count === 0) {
    // If count is 0, return an empty string
    return "";
  } else if (count < 0) {
    // If count is negative, return an error message
    return "Error";
  }
}


module.exports = repeat;