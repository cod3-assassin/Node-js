const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => {
    console.log("File Content :", data);
  })
  .catch((err) => {
    console.log("Error reading file ", err);
  });

fs.writeFile("example.txt", "Hello from Node js !")
  .then(() => {
    console.log("File written successfull !");
  })
  .catch((err) => {
    console.log("Error writing file ", err);
  });
