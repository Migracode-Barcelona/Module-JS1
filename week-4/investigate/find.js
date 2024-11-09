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
//Answer:The variable index is initialized to 0.
//The while loop condition checks whether index is less than the length of the string str.

// b) What is the if statement used to check
//Answer:The if statement is used to check if the str[index] is strictly equal to char
//then it should return index

// c) Why is index++ being used?
//Answer:it is used for increment of the index by 1

// d) What is the condition index < str.length used for?
//Answer:it is used to check if the value of the index is less than the value of the str.length
