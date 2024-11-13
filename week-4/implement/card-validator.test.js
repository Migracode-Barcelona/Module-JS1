//The following credit card numbers are valid:

//9999777788880000
//6666666666661666

//And the following credit card numbers are invalid:

//a92332119c011112 (invalid characters)
//4444444444444444 (only one type of number)
//1111111111111110 (sum less than 16)
//6666666666666661 (odd final number)

const cardValidity = require("./card-validator");

test("To Test for Validity", function () {
  expect(cardValidity("9999777788880000")).toBeTruthy;
});

test("To Test for Validity", function () {
  expect(cardValidity("6666666666661666")).toBeTruthy;
});

test("To Test for Validity", function () {
  expect(cardValidity("a92332119c011112 ")).toBeFalsy;
});

test("To Test for Validity", function () {
  expect(cardValidity("4444444444444444")).toBeFalsy;
});

test("To Test for Validity", function () {
  expect(cardValidity("4444444444444444")).toBeFalsy;
});

test("To Test for Validity", function () {
  expect(cardValidity("6666666666666661")).toBeFalsy;
});
