const fs = require("fs");

// Define the file path
const filePath = "example.txt";

// Watch for changes in the file
fs.watch(filePath, (eventType, filename) => {
  if (filename) {
    console.log(`File ${filename} has been ${eventType}`);
  } else {
    console.log("Filename not provided");
  }
});

// Keep the process running
console.log(`Watching for changes in ${filePath}`);
