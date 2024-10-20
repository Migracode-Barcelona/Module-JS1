Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
Answer: When we call `alert`, a dialog box will appear on the screen displaying the message `"Hello world!"`. This dialog box interrupts the user’s interaction with the page until it is confirmed by clicking the "OK" button.


Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.
What effect does calling the `prompt` function have?
Answer:
  const myName = prompt("What is your name?");
  When we call prompt, a dialog box appears with the message "What is your name?" and a text input field where the user can type their response.


What is the return value of `prompt`?
Answer:
  If the user enters "Umair" and clicks "OK", then myName will be "Umair".
  If the user clicks `Cancel`, then myName will be `null`.
