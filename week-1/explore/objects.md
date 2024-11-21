## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
=ƒ log() { [native code] }

Now enter just `console` in the Console, what output do you get back?
= console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}

Try also entering `typeof console`

='object'

Answer the following questions:

# What does `console` store?

The console does not store data or values instead it is used for display purposes

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The dot (.) is used to access properties or methods of an object which is console.

console.log:It is accessing the log function that exists inside the console object.

console.assert:Accesses the assert function inside the console object.
