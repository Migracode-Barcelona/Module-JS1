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
//index starts at 0 and executes the if function and then increases by 1  and repeats with each loop iteration. 


// b) What is the if statement used to check
//It checks if the character at the current index matches the targe char. If it does, the function returns index.
//once it find the character, it breaks. 

// c) Why is index++ being used?
//It is used as an increase the value of index by 1 and passing the value to while loop to check the next character



// d) What is the condition index < str.length used for?
//it takes the value of the index and compares it to the length of the given string.In this case the index value should be 
//less than the length of the given string.It ensures the loop stops when the index value reaches the value of string
//length.
