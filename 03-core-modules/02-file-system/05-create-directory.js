const fs = require("fs");

// Define the directory path
const directoryPath = "new_directory";

// Create the directory asynchronously
fs.mkdir(directoryPath, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating directory:", err);
    return;
  }
  console.log("Directory", directoryPath, "has been created");
});
