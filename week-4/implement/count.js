function countChar(input, character) {
  const count = input.split(character).length - 1;
  return count === 0 ? 0 : count;
}

const expectedExample1 = 2;
const expectedExample2 = 2;

console.assert(countChar("Zanzibar zoo", "z") === expectedExample1); // Output: 2
console.assert(countChar("Goose", "o") === expectedExample2); // Output: 2

module.exports = countChar;
