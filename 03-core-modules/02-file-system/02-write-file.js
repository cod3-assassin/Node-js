const fs = require("fs");

const filepath = "example.txt";

const dataTowrite = "Hello World !";

fs.writeFile(filepath, dataTowrite, "utf8", (err) => {
  if (err) {
    console.log("Faild to write the file !", err);
    return;
  }
  console.log("Data has been written to", filepath);
});
