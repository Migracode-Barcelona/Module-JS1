// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const base = filePath.slice(lastSlashIndex + 1);
console.log(`The base part of ${filePath} is ${base}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable

// ANSWER //

// Find the dir part by slicing the filePath up to the last slash
const dir = filePath.slice(0, lastSlashIndex);
console.log(`The dir part of ${filePath} is ${dir}`); // Output: "/Users/mitch/cyf/Module-JS1/week-1/interpret"

// Find the index of the last dot to get the ext part
const lastDotIndex = base.lastIndexOf(".");
const ext = base.slice(lastDotIndex + 1);
console.log(`The ext part of ${base} is ${ext}`); // Output: "txt"
