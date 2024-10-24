# 🧭 Guide to week 4 exercises

## 🧰 Setup

You will need to setup for this week's exercises. Use the [prep](https://curriculum.codeyourfuture.io/js1/sprints/4/prep/) from this week to
install Jest. **Note: You must install Jest in the root of this repo.**

## 🔧 Rewrite

`console.log` is most often used as a debugging tool. We use to inspect the state of our program during runtime.
We can use `console.assert` to write assertions: however, it is not very effective for writing large test suites.

Your first task is to rewrite the assertions from `week-3/implement` using Jest syntax.
You will also need to update the filenames in `week-3/implement` so they have a `.test.js` extension and _not_ just a `.js` extension.
Keep running `npm test` to check the new tests you've created.

### Completed !!!
https://github.com/UmairRiazDev/Module-JS1/tree/week-3/week-3/implement

## 🔍 Investigate

In this exercise, you'll need to **play computer** with the function `find`. This function makes use of a while loop statement. Your task will be to step through the code to figure out what is happening when the computer executes the code.

## 🔧 Implement

In the `implement` directory you've got a number of functions you'll need to implement.
For each function, you also have a number of different cases you'll need to check for your function.

Use the acceptance criteria as an aid in writing tests to check your functionality.

Recommended order:

1. `get-ordinal-number.test.js`
1. `count.test.js`
1. `repeat.test.js`
1. `is-prime.test.js`

## 💪 Stretch

Try implementing the functions specified in `password-validator.js` and `card-validator.md`
