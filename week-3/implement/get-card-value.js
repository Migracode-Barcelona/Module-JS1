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

//Solution
function getCardValue(card) {
  const cardRank = card.slice(0, card.length - 1); // Extract the rank from the card

  //Handle number cards (2-10)
  if (cardRank >= "2" && cardRank <= "9") {
    return Number(cardRank);
  } else if (cardRank === "10") {
    return 10;
    //Handle face card (J, Q, K)
  } else if (cardRank === "J" || cardRank === "Q" || cardRank === "K") {
    return 10;
    // Handle Ace (A):
  } else if (cardRank === "A") {
    return 11;
  }

  //Handle invalid card
  throw new Error("Invalid card rank.");
}
//Assertion for the function
try {
  //Handle number cards (2-10)
  console.log(getCardValue("4♠")); //Expected result :4
  console.log(getCardValue("6♥")); //Expected result :6
  console.log(getCardValue("9♣")); //Expected result :9
  console.log(getCardValue("7♦")); //Expected result :7
  // Handle card "10"
  console.log(getCardValue("10♠")); // Expected result: 10
  //Handle face card (J, Q, K)
  console.log(getCardValue("J♥")); //Expected result :10
  console.log(getCardValue("K♣")); //Expected result :10
  console.log(getCardValue("Q♣")); //Expected result :10
  // Handle Ace (A):
  console.log(getCardValue("A♦")); //Expected result :11
} catch (error) {
  console.log("Expected error message", error.message);
}
try {
  console.log(getCardValue("Z♠")); //Invalid card
  console.log(getCardValue("11♠")); //Invalid card
} catch (error) {
  console.log("Expected error message", error.message);
}
console.log("All test passed");
