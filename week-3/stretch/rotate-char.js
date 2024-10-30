// The rotateCharacter function takes a character and a shift value as input.
// If the character is a letter (either uppercase or lowercase),
// it rotates the character by the specified shift value within the alphabet,
// considering wrapping around if necessary. Non-letter characters are returned unchanged.

// This function is commonly used for weak text encryption and decryption,
// where shifting characters by a certain value can obscure their meaning or reveal hidden messages.

// Acceptance criteria:

// Given a character (char) and a shift value (shift),
// When the function rotateCharacter is called with these inputs,
// Then it should:

// Scenario: Rotate Lowercase Letters:
// Given a lowercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the lowercase letter by shift positions within the lowercase alphabet, wrapping around if necessary, and return the rotated lowercase letter as a string.
console.log(rotateCharacter("a", 3)); // Output: "d"
console.log(rotateCharacter("f", 1)); // Output: "g"

// Scenario: Rotate Uppercase Letters:
// Given an uppercase letter character (char) and a positive integer shift,
// When the function is called with these inputs,
// Then it should rotate the uppercase letter by shift positions within the uppercase alphabet, wrapping around if necessary, and return the rotated uppercase letter as a string.
console.log(rotateCharacter("A", 3)); // Output: "D"
console.log(rotateCharacter("F", 1)); // Output: "G"

// Scenario: Leave Non-Letter Characters Unchanged:
// Given a character (char) that is not a letter (neither uppercase nor lowercase) and any positive or negative shift value,
// When the function is called with these inputs,
// Then it should return the character unchanged.
// This specification outlines the behavior of the rotateCharacter function for different input scenarios, including valid and invalid characters, and defines the expected output or action for each case.
console.log(rotateCharacter("7", 5)); // Output: "7" (unchanged, not a letter)

// Scenario: Shifting a Character with Wraparound
// Given a character char within the lowercase alphabet range (e.g., 'z') or the uppercase alphabet range (e.g., 'Z'),
// And a positive integer shift that causes the character to wrap around the alphabet when rotated (e.g., a shift of 3 for 'z' or 'Z'),
// When the rotateCharacter function is called with char and shift as inputs,
// Then it should correctly rotate the character by shift positions within the alphabet while handling the wraparound,
// And the function should return the rotated character as a string (e.g., 'z' rotated by 3 should become 'c', 'Z' rotated by 3 should become 'C').
console.log(rotateCharacter("z", 1)); // Output: "a" (unchanged, not a letter)

//Solution:
function rotateCharacter(char, shift) {
  //check if the character is un lowercase
  if (char >= "a" && char >= "z") {
    const aNewChar = String.fromCharCode(
      ((char.charCodeAt(0) - "a".charCodeAt(0) + shift) % 26) +
        "a".charCodeAt(0)
    );
    return aNewChar;
  }

  //check if the character is an uppercase
  if (char >= "A" && char <= "Z") {
    const aNewChar = String.fromCharCode(
      ((char.charCodeAt(0) - "A".charCodeAt(0) + shift) % 26) +
        "A".charCodeAt(0)
    );
    return aNewChar;
  }
  return char;
}

console.log(rotateCharacter("a", 3));
console.log(rotateCharacter("f", 1));
console.log(rotateCharacter("A", 3));
console.log(rotateCharacter("F", 1));
console.log(rotateCharacter("7", 5));
console.log(rotateCharacter("z", 1));
console.log(rotateCharacter("Z", 1));
console.log(rotateCharacter("z", 3));
console.log(rotateCharacter("Z", 3));
