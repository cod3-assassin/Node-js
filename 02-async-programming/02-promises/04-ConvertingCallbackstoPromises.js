// util.promisify takes a function that follows the error-first callback style and returns a version that returns a promise.
// This allows using promise-based syntax with functions that originally used callbacks.

const { promisify } = require("util");

const fs = require("fs");

const readFile = promisify(fs.readFile);

readFile("example.txt", "utf8")
  .then((data) => {
    console.log("File content : ", data);
  })
  .catch((err) => {
    console.log("Error reading file :", err);
  });
