const path = require("path");

const envPaths = process.env.PATH;

const paths = envPaths.split(path.delimiter);

console.log("Environment Paths :", paths);
