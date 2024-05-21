const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("error reading the file ", err);
    return;
  }
  fs.writeFile("output.txt", data, (err) => {
    if (err) {
      console.log("error writing file", err);
    }
    console.log("File written Succsessfully !");
  });
});
