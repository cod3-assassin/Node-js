const fs = require("fs");

const filepath = "example.txt";

// Read the file asynchronously

fs.readFile(filepath, "utf8", (err, data) => {
  if (err) {
    console.log("Error Reading file !", err);
    return;
  }
  console.log("File Content :", data);
});
