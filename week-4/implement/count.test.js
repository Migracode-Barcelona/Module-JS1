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

function countChar(str, char) {
  let count = 0;

  // Looping through each character in the string
  for (const character of str) {
    if (character === char) {
      count++;
    }
  }

  return count;
}

// TESTS

test("counts multiple occurrences of 'a' in 'aaaaa'", () => {
  expect(countChar("aaaaa", "a")).toBe(5); // 'a' appears five times
});

test("counts multiple occurrences of 'a' in 'banana'", () => {
  expect(countChar("banana", "a")).toBe(3); // 'a' appears three times
});

test("counts multiple occurrences of 'l' in 'hello world'", () => {
  expect(countChar("hello world", "l")).toBe(3); // 'l' appears three times
});

test("returns 0 when character does not occur (input 'hello world', char 'z')", () => {
  expect(countChar("hello world", "z")).toBe(0); // 'z' does not appear
});

test("returns 1 when character occurs once (input 'example', char 'x')", () => {
  expect(countChar("example", "x")).toBe(1); // 'x' appears once
});

test("returns 0 for case-sensitive check (input 'test', char 'T')", () => {
  expect(countChar("test", "T")).toBe(0); // 'T' does not appear
});
