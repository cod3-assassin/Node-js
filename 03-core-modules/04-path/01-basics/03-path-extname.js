const path = require("path");

const filepath =
  "/Desktop/Node-js/03-core-modules/04-path/01-basics/01-path-basename.js";

const extName = path.extname(filepath);

console.log("Extension Name :", extName);
