Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
What is the return value of `prompt`?

THE ALERT FUNCTION
The browser will display a modal dialog box with the text "Hello world!".
The dialog box has an "OK" button, and until the user clicks "OK", it blocks interaction with the rest of the page.
This function does not return any value (its return value is undefined).

THE PROMPT FUNCTION
The browser will display a modal input dialog box with the message "What is your name?" and a text field where the user can input a value.
The user can either:
Enter text in the input field and click "OK", which returns the text they entered.
Click "Cancel", which returns null.

RETURN
The return value of the prompt function is the text the user enters in the input box if they click "OK".
