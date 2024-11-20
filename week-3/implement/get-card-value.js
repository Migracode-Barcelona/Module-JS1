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
