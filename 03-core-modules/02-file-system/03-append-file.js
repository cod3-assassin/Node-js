const fs = require("fs");

//Define the file path

const filepath = "example.txt";
const dataToAppend = "\nThis is Additional data !";

//Append data to file asynchronously

fs.appendFile(filepath, dataToAppend, "utf8", (err) => {
  if (err) {
    console.log("Error appending to file ", err);
  }
  console.log("Data has been Appned to ", filepath);
});
