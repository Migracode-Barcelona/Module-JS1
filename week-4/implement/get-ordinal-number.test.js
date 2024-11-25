9;
function getOrdinal(number) {
  if (typeof number !== "number" || isNaN(number)) return null;
  const suffixes = ["th", "st", "nd", "rd"];
  const value = number % 100;
  return (
    number + (suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0])
  );
}
describe("getOrdinal", () => {
  test('returns "1st" for 1', () => {
    expect(getOrdinal(1)).toBe("1st");
  });
  test('returns "2nd" for 2', () => {
    expect(getOrdinal(2)).toBe("2nd");
  });
  test('return "5th" for 5', () => {
    expect(getOrdinal(5)).toBe("5th");
  });
  test('return "5th" for 5', () => {
    expect(getOrdinal(5)).toBe("5th");
  });
  test('return "11th" for 11', () => {
    expect(getOrdinal(11)).toBe("11th");
  });
  test('return "21st" for 21', () => {
    expect(getOrdinal(21)).toBe("21st");
  });
  test('return "42th" for 42', () => {
    expect(getOrdinal(42)).toBe("42nd");
  });
});
