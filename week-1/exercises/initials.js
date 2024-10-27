let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string in upper case to form the user's initials

let initials =
  firstName.charAt(0).toUpperCase() +
  middleName.charAt(0).toUpperCase() +
  lastName.charAt(0).toUpperCase();

// Log the variable in each case

console.log(initials);
