// This problem involves playing cards: https://en.wikipedia.org/wiki/Standard_52-card_deck

// You will need to implement a function getCardValue

// You need to write assertions for your function to check it works in different cases

// Acceptance criteria:

// Given a card string in the format "A♠" (representing a card in blackjack),
// When the function getCardValue is called with this card string as input,
// Then it should return the numerical card value

// Handle Number Cards (2-10):
// Given a card with a rank between "2" and "10",
// When the function is called with such a card,
// Then it should return the numeric value corresponding to the rank (e.g., "5" should return 5).

// Handle Face Cards (J, Q, K):
// Given a card with a rank of "J," "Q," or "K",
// When the function is called with such a card,
// Then it should return the value 10, as these cards are worth 10 points each in blackjack.

// Handle Ace (A):
// Given a card with a rank of "A",
// When the function is called with an Ace,
// Then it should, by default, assume the Ace is worth 11 points, which is a common rule in blackjack.

// Handle Invalid Cards:
// Given a card with an invalid rank (neither a number nor a recognized face card),
// When the function is called with such a card,
// Then it should throw an error indicating "Invalid card rank."

function getCardValue(card) {
  // Removing last character if input contains (♠, ♥, ♦, ♣)
  const lastChar = card.slice(-1);
  const suits = ["♠", "♥", "♦", "♣"];

  // If the last character is not present
  let rank;
  if (suits.includes(lastChar)) {
    rank = card.slice(0, -1); // Removing the last character
  } else {
    rank = card; // If there is no last character
  }

  // Handle numeric cards (2-10)
  if (!isNaN(rank)) {
    const numberValue = parseInt(rank);
    if (numberValue >= 2 && numberValue <= 10) {
      return numberValue;
    }
  }

  // Handle face cards (J, Q, K)
  if (rank === "J" || rank === "Q" || rank === "K") {
    return 10;
  }

  // Handle Ace (A)
  if (rank === "A") {
    return 11;
  }

  // If rank is invalid, throw an error
  throw new Error("Invalid card rank");
}

module.exports = { getCardValue };

// Test Cases
try {
  // Handle Number Cards (2-10):
  console.log(getCardValue("2♣")); // Expected output: 2
  console.log(getCardValue("10♦")); // Expected output: 10
  console.log(getCardValue("7")); // Expected output: 7

  // Handle Face Cards (J, Q, K):
  console.log(getCardValue("J♠")); // Expected output: 10
  console.log(getCardValue("Q♦")); // Expected: 10
  console.log(getCardValue("K")); // Expected: 10

  // Given a card string in the format "A♠" (representing a card in blackjack),
  console.log(getCardValue("A♥")); // Expected: 11

  // Handle Invalid Cards:
  console.log(getCardValue("1♣")); // Should throw Error
} catch (e) {
  console.log("Caught error:", e.message); // Expected: "Invalid card rank"
}

try {
  console.log(getCardValue("Z")); // Should throw Error
} catch (e) {
  console.log("Caught error:", e.message); // Expected: "Invalid card rank"
}

console.log("All tests completed.");
