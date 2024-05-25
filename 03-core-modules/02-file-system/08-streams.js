const fs = require("fs");

//Define file path

const filePath = "example.txt";

const readableSteam = fs.createReadStream(filePath, { encoding: "utf8" });

//Handel stream events -> data , end and error

readableSteam.on("data", (chunk) => {
  console.log("Received Chunk :", chunk);
});

readableSteam.on("end", () => {
  console.log("No more data to read !");
});

readableSteam.on("error", (err) => {
  console.error("Error reading file :", err);
});
