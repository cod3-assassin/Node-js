const path = require("path");

const fromPath = "/user/john/documents";
const toPath = "/user/john/photos/vacation.jpg";

const relativePath = path.relative(fromPath, toPath);

console.log("Relative Path :", relativePath);
