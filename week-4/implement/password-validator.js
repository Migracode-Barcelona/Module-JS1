function passwordValidity(password) {
  //PASSWORD LENGTH
  const passwordLength = password.length;

  //UPPERCASES
  const passUppercase = (password.match(/[A-Z]/g) || []).length;

  //LOWERCASES
  const passLowercase = (password.match(/[a-z]/g) || []).length;

  //NUMBERS
  const isANumber = (password.match(/[0-9]/g) || []).length;

  //SYMBOLS
  const symbols = (password.match(/[!#$%.*&]/g) || []).length;

  //ARRAY OF PREVIOUS PASSWORDS
  const previousPasswords = ["Susan@2", "$Femi565", "Winie!22"];

  //DOES PASSWORD INCLUDES PREVIOUS PASSWORDS
  const isPreviousPassword = previousPasswords.includes(password);

  if (
    passwordLength >= 5 &&
    passUppercase > 0 &&
    passLowercase > 0 &&
    isANumber > 0 &&
    symbols > 0 &&
    !isPreviousPassword
  ) {
    return true;
  }

  return false;
}

module.exports = passwordValidity;
