const { fileURLToPath } = require("url");
const path = require("path");

const fileURL = new URL("file:///users/john/documents/file.txt");
const filePath = fileURLToPath(fileURL);

console.log("File Path:", filePath);
