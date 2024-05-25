const path = require("path");

const folder = "/user/john";
const filename = "file.txt";

const fullPath = path.join(folder, "documents", filename);

console.log("Full Path :", fullPath);
