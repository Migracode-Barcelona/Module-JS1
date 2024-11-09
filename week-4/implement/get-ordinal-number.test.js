// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

//solution
function getOrdinalNumber(num) {
  if (typeof num !== "number" || isNaN(num)) {
    return "invalid number";
  }
  const lastDigit = num % 10;
  const lastTwoDigit = num % 100;

  if (lastTwoDigit >= 11 && lastTwoDigit <= 13) {
    return num + "th";
  }
  switch (lastDigit) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
console.log(getOrdinalNumber(12));

//test.js
test("should return 1st for 1", () => {
  expect(getOrdinalNumber(1)).toBe("1st");
});

test("should return 2nd for 2", () => {
  expect(getOrdinalNumber(2)).toBe("2nd");
});

test("should return 3rd for 3", () => {
  expect(getOrdinalNumber(3)).toBe("3rd");
});

test("should return 4th for 4", () => {
  expect(getOrdinalNumber(4)).toBe("4th");
});

test("should return 11th for 11", () => {
  expect(getOrdinalNumber(11)).toBe("11th");
});

test("should return 12th for 12", () => {
  expect(getOrdinalNumber(12)).toBe("12th");
});

test("should return 13th for 13", () => {
  expect(getOrdinalNumber(13)).toBe("13th");
});

test("should return 21st for 21", () => {
  expect(getOrdinalNumber(21)).toBe("21st");
});
test("should return 101st for 101", () => {
  expect(getOrdinalNumber(101)).toBe("101st");
});
