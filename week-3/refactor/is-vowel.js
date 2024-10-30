function isVowel(letter) {
  return (
    letter === "a" ||
    letter === "e" ||
    letter === "i" ||
    letter === "k" ||
    letter === "o" ||
    letter === "u"
  );
}

// here is an implementation of isVowel - this function checks if a letter is a vowel

console.log("case: letter a...");
const currentOutput = isVowel("a");
const targetOutput = true;
console.assert(
  currentOutput === targetOutput,
  "current output: %s, target output: %s",
  currentOutput,
  targetOutput
);

console.log("case: letter e...");
const currentOutput2 = isVowel("e");
const targetOutput2 = true;
console.assert(
  currentOutput2 === targetOutput2,
  "current output: %s, target output: %s",
  currentOutput2,
  targetOutput2
);

console.log("case: letter k...");
const currentOutput3 = isVowel("k");
const targetOutput3 = false;
console.assert(
  currentOutput3 === targetOutput3,
  "current output: %s, target output: %s",
  currentOutput3,
  targetOutput3
);

console.log("case: letter i...");
const currentOutput4 = isVowel("i");
const targetOutput4 = true;
console.assert(
  currentOutput4 === targetOutput4,
  "current output: %s, target output: %s",
  currentOutput4,
  targetOutput4
);

console.log("case: letter u...");
const currentOutput5 = isVowel("u");
const targetOutput5 = true;
console.assert(
  currentOutput5 === targetOutput5,
  "current output: %s, target output: %s",
  currentOutput5,
  targetOutput5
);

console.log("case: letter o...");
const currentOutput6 = isVowel("o");
const targetOutput6 = true;
console.assert(
  currentOutput6 === targetOutput6,
  "current output: %s, target output: %s",
  currentOutput6,
  targetOutput6
);

console.log("All test passed");
