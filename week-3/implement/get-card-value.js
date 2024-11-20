function getCardValue(card) {
  const rank = card.slice(0, -1);
  if (!isNaN(rank)) {
    // Handle number cards
    const num = parseInt(rank);
    if (num >= 2 && num <= 10) {
      return num;
    }
  } else if (rank === "J" || rank === "Q" || rank === "K") {
    // Handle face cards
    return 10;
  } else if (rank === "A") {
    // Handle Ace
    return 11;
  } else {
    // Handle invalid cards
    throw new Error("Invalid card rank.");
  }
}
// Test number cards
console.assert(getCardValue("2♠") === 2, "Test Case 1 Failed");
console.assert(getCardValue("5♦") === 5, "Test Case 2 Failed");
console.assert(getCardValue("10♣") === 10, "Test Case 3 Failed");

// Test face cards
console.assert(getCardValue("J♠") === 10, "Test Case 4 Failed");
console.assert(getCardValue("Q♦") === 10, "Test Case 5 Failed");
console.assert(getCardValue("K♣") === 10, "Test Case 6 Failed");

// Test Ace
console.assert(getCardValue("A♥") === 11, "Test Case 7 Failed");

// Test invalid card
try {
  getCardValue("Z♠");
  console.assert(false, "Test Case 8 Failed");
} catch (e) {
  console.assert(e.message === "Invalid card rank.", "Test Case 8 Passed");
}
