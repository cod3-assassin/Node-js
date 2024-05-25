const path = require("path");

const pathObject = {
  dir: "/Desktop/Node-js/03-core-modules/04-path/01-basics",
  base: "index.txt",
};

const formattedPath = path.format(pathObject);
console.log("Formatted Path :", formattedPath);
