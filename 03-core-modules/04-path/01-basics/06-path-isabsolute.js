const path = require("path");

const absolutePath = "/users/john/documents/file.txt";
const relativePath = "documents/file.txt";

console.log("Is Absolute Path:", path.isAbsolute(absolutePath)); // true
console.log("Is Absolute Path:", path.isAbsolute(relativePath)); // false
