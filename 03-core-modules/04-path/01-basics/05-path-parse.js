const path = require("path");

const filePath = "/users/john/documents/file.txt";
const pathObject = path.parse(filePath);

console.log("Parsed Path Object :", pathObject);
