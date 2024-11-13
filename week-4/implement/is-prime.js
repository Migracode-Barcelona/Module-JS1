function isPrime(num) {
  const positiveNumber = Math.abs(num);

  const Remainder = positiveNumber % 2;

  if (Remainder === 1 && positiveNumber !== 1) {
    return true;
  }
  if (positiveNumber === 2) return true;
  else return false;
}

module.exports = isPrime;
