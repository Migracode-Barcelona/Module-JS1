function find(str, char) {
  let index = 0;

  while (index < str.length) {
    if (str[index] === char) {
      return index;
    }
    index++;
  }
  return -1;
}

console.log(find("code your future", "u"));
console.log(find("code your future", "z"));

// The while loop statement allows us to do iteration - the repetition of a certain number of tasks according to some condition
// See the docs https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

// Use the Python Visualiser to help you play computer with this example and observe how this code is executed
// Pay particular attention to the following:

// a) How the index variable updates during the call to find

// Well, it starts at 0 that means it points to the first character of the string. Whenever the loop runs (each time), index increases by 1. This allows the function to check each character in the string one by one. If it finds the character we're looking for (char), it returns the current position (index). If not, it moves to the next character by increasing the index.

//////////////////////////////////////
// b) What is the if statement used to check

// The if statement checks if the character at the current index of the string is the same as the character we want to find. If they are equal, it means we found the character, and the function returns the index (the position of that character in the string).
/*
  return index; // This means we found the character
*/

//////////////////////////////////////
// c) Why is index++ being used?

// The index++ means "add 1 to index." It lets the function move on to the next character in the string. If we don't use index++, the function would keep looking at the same character forever and would never finish (The program will be in infinite loop).

//////////////////////////////////////
// d) What is the condition index < str.length used for?

// The condition index < str.length checks if index is still pointing to a valid character in the string. It makes sure that we don't go past the end of the string. If index becomes equal to or greater than the length of the string, it means we've checked all the characters, and the loop will stop. This helps the function know when to stop looking for the character and return -1 if it wasn't found.
