// Find to-pounds.js in an earlier week in this repo

// Take this code and turn it into a reusable block of code.
// Declare a function called toPounds with an appropriately named parameter.
// Call this function a number of times to check it works for different inputs

function toPounds(kilograms) {
  // kilograms to pounds
  const kgToPound = 2.20462;

  // Calculating pounds
  const pounds = kilograms * kgToPound;

  // Return rounded to 2 decimal places
  return Math.round(pounds * 100) / 100;
}

// Calling
console.log(`2 kg is equal to ${toPounds(2)} pounds`);
console.log(`5 kg is equal to ${toPounds(5)} pounds`);
console.log(`10 kg is equal to ${toPounds(10)} pounds`);
