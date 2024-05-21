const fs = require("fs").promises;

fs.readFile("example.txt", "utf8")
  .then((data) => {
    "File contents :", data;
    return fs.writeFile("copy.txt", data);
  })
  .then(() => {
    console.log("File copied successfully !");
    return fs.readFile("copy.txt", "utf8");
  })
  .then((copyData) => {
    console.log("Data Copied succesfully :", copyData);
  })
  .catch((err) => {
    console.error("Error :", err);
  });
