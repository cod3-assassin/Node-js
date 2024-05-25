const { pathToFileURL } = require("url");
const path = require("path");

const filePath = "/users/john/documents/file.txt";
const fileURL = pathToFileURL(filePath);

console.log("File URL:", fileURL.href);
