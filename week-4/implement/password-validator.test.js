const { nodeInternals } = require("stack-utils");

/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const passwords = ["OldPassword", "Password123", "1234abc!", "password"];

function passwordValidation(password) {
  // Check if the password has at least 5 characters
  if (password.length < 5) {
    console.log("Password is too short. Must be at least 5 characters.");
    return false;
  }

  //  Check for at least one uppercase letter
  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (
      password[i] === password[i].toUpperCase() &&
      password[i] !== password[i].toLowerCase()
    ) {
      hasUppercase = true;
      break;
    }
  }
  if (!hasUppercase) {
    console.log("Password must contain at least one uppercase letter.");
    return false;
  }

  //  Check for at least one lowercase letter
  let hasLowercase = false;
  for (let i = 0; i < password.length; i++) {
    if (
      password[i] === password[i].toLowerCase() &&
      password[i] !== password[i].toUpperCase()
    ) {
      hasLowercase = true;
      break;
    }
  }
  if (!hasLowercase) {
    console.log("Password must contain at least one lowercase letter.");
    return false;
  }

  //  Check for at least one number
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] >= "0" && password[i] <= "9") {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    console.log("Password must contain at least one number.");
    return false;
  }

  //  Check for at least one special character
  const specialCharacters = ["!", "#", "$", "%", ".", "*", "&"];
  let hasSpecialCharacter = false;
  for (let i = 0; i < password.length; i++) {
    if (specialCharacters.includes(password[i])) {
      hasSpecialCharacter = true;
      break;
    }
  }
  if (!hasSpecialCharacter) {
    console.log(
      "Password must contain at least one special character (!, #, $, %, ., *, &)."
    );
    return false;
  }

  //  Check if the password has been used before
  if (passwords.includes(password)) {
    console.log(
      "Password has already been used. Please choose a different one."
    );
    return false;
  }

  // If all checks passed, the password is valid
  return true;
}

// Testing the function
const testPassword = "Password123!";
if (passwordValidation(testPassword)) {
  console.log("This password is valid.");
} else {
  console.log("This password is invalid.");
}

console.log(passwordValidation("Pass")); // false password is too short
console.log(passwordValidation("Password123!")); //true
console.log(passwordValidation("Password12#4")); //true
console.log(passwordValidation("Password123")); //false password must contain at least one special character
console.log(passwordValidation("password125")); //false password must contain at least one uppercase letter
