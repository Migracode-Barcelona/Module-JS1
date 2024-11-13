// EXCEPTIONS FOR 11TH, 12TH, 13TH

function getOrdinal(number) {
  if (number >= 11 && number <= 13) {
    return number + "th";
  }

  //VARIABLE RETURNS THE REMAINDER IN BASE 10
  const lastDigit = number % 10;

  // THIS SWITCH  RETURNS NUMBERS WITH 1ST,2ND AND 3RD POSITIONS AND PLACES EVERY OTHER NUMBER AS DEFAULT
  switch (lastDigit) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
    default:
      return number + "th";
  }
}

module.exports = getOrdinal;
