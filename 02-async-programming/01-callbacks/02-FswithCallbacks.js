const fs = require("fs");

fs.readFile("./index.html", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reaading file ", err);
  }
  return console.log("File content :", data);
});
