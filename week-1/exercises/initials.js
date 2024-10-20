let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string in upper case to form the user's initials
// Log the variable in each case

let initials = (
  firstName.charAt(0) +
  middleName.charAt(0) +
  lastName.charAt(0)
).toUpperCase();

console.log(initials); // Output: "CKJ"
