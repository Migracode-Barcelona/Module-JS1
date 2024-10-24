// Implement a function repeat

// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

function repeat(str, count) {
  // Check for negative count
  if (count < 0) {
    throw new Error("Count must be a positive integer");
  }

  // Return empty string for count of 0
  if (count === 0) {
    return "";
  }

  // Use the repeat method for positive counts
  return str.repeat(count);
}

// TESTS

test("repeats phrase 'good morning' 2 times", () => {
  expect(repeat("good morning", 2)).toBe("good morninggood morning");
});

test("repeats the string 3 times", () => {
  expect(repeat("abc", 3)).toBe("abcabcabc");
});

test("returns 'world' when count is 1", () => {
  expect(repeat("world", 1)).toBe("world");
});

test("returns the original string when count is 1", () => {
  expect(repeat("hello", 1)).toBe("hello");
});

test("returns an empty string when count is 0", () => {
  expect(repeat("test", 0)).toBe("");
});

// Test with a count of negative (should throw an error)
test("throws an error when count is negative", () => {
  expect(() => repeat("error", -1)).toThrow("Count must be a positive integer");
});

test("throws an error when count is negative", () => {
  expect(() => repeat("error", -2)).toThrow("Count must be a positive integer");
});
