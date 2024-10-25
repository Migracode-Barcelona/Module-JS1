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

console
assert: ƒ assert()

clear: ƒ clear()

context: ƒ context()

count: ƒ count()

countReset: ƒ countReset()

createTask: ƒ createTask()

debug: ƒ debug()

dir: ƒ dir()

dirxml: ƒ dirxml()

error: ƒ error()

group: ƒ group()

groupCollapsed: ƒ groupCollapsed()

groupEnd: ƒ groupEnd()

info: ƒ info()

log: ƒ log()

memory: MemoryInfo {totalJSHeapSize: 10000000, usedJSHeapSize: 10000000, jsHeapSizeLimit: 3760000000}

profile: ƒ profile()

profileEnd: ƒ profileEnd()

table: ƒ table()

time: ƒ time()

timeEnd: ƒ timeEnd()

timeLog: ƒ timeLog()

timeStamp: ƒ timeStamp()

trace: ƒ trace()

warn: ƒ warn()

Symbol(Symbol.toStringTag)
:
"console"

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?

The dot (.) is used to access properties or methods of an object which is console.

console.log:It is accessing the log function that exists inside the console object.

console.assert:Accesses the assert function inside the console object.
