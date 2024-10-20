## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
Answer: ƒ log() { [native code] }
  It indicates that `console.log` is a function.


Now enter just `console` in the Console, what output do you get back?
Answer: Console {log: ƒ, info: ƒ, warn: ƒ, error: ƒ, debug: ƒ, …}
  It indicates that console is an object that contains various methods for logging and debugging information in the console, such as log, info, warn, error, and others.


Try also entering `typeof console`
Answer: "object"
  It data type of `console` which is an object in JavaScript.

Answer the following questions:

What does `console` store?
Answer: The console is an object that allows access to the browser's debugging tools.


What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
Answer:
  - console.log accesses the log method of the console object, allows user to print messages to the console.
  - console.assert can be used to test conditions and output messages if the assertion fails.
