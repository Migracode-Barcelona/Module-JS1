const { getCardValue } = require("./get-card-value"); // Import the function

// Test for Numeric Cards (2-10)
test("should return correct value for number cards (2-10)", () => {
  expect(getCardValue("2♠")).toBe(2);
  expect(getCardValue("10♦")).toBe(10);
  expect(getCardValue("7")).toBe(7);
});

// Test for Face Cards (J, Q, K)
test("should return 10 for face cards (J, Q, K)", () => {
  expect(getCardValue("J♠")).toBe(10);
  expect(getCardValue("Q♥")).toBe(10);
  expect(getCardValue("K")).toBe(10);
});

// Test for Ace (A)
test("should return 11 for Ace", () => {
  expect(getCardValue("A♥")).toBe(11);
});

// Test for Invalid Card Rank
test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("1♣")).toThrow("Invalid card rank");
});

test("should throw an error for invalid card rank", () => {
  expect(() => getCardValue("Z")).toThrow("Invalid card rank");
});
