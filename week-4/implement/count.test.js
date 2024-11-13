// implement a function countChar that counts the number of times a character occurs in a string

// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count consecutive occurrences of char (e.g., 'a' appears five times in 'aaaaa').

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

function countChar(input, character) {
  const count = input.split(character).length - 1;
  return count === 0 ? 0 : count;
}

const expectedExample1 = 2;
const expectedExample2 = 2;

console.assert(countChar("Zanzibar zoo", "z") === expectedExample1); // Output: 2
console.assert(countChar("Goose", "o") === expectedExample2); // Output: 2
