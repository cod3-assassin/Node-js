const path = require("path");

const messyPath = "/user/skipper/../john/documents/./file.txt";

const normalizedPath = path.normalize(messyPath);

console.log("Noarmalize Path :", normalizedPath);
