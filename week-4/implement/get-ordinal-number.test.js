// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback
const getOrdinal = require("./get-ordinal-number");

test("23 should be converted to 23rd", function () {
  expect(getOrdinal(23)).toBe("23rd");
});

test("1 should be converted to 1st", function () {
  expect(getOrdinal(1)).toBe("1st");
});

test("2 should be converted to 2nd", function () {
  expect(getOrdinal(2)).toBe("2nd");
});

test("13 should be converted to 13th", function () {
  expect(getOrdinal(13)).toBe("13th");
});

test("90 should be converted to 90th", function () {
  expect(getOrdinal(90)).toBe("90th");
});

test("100 should be converted to 100th", function () {
  expect(getOrdinal(100)).toBe("100th");
});
