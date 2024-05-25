const fs = require("fs");

//Define file path

const filepath = "example.txt";

fs.unlink(filepath, (err) => {
  if (err) {
    console.error("Error deleting file ", err);
    return;
  }
  console.log("File ", filepath, "has been deleted !  ");
});
