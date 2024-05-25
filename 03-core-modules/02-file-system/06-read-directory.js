const fs = require("fs");

const directoryPath = "./";

//Read the content of the directory asynchronously

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error("Error reading directory ", err);
    return;
  }
  console.log("Directory contents :", files);
});
