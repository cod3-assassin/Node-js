const fs = require("fs").promises;

let promise1 = fs.readFile("file1.txt", "utf8");
let promise2 = fs.readFile("file2.txt", "utf8");

Promise.all([promise1, promise2])
  .then((result) => {
    console.log("File 1 contents :", result[0]);
    console.log("File 2 contents :", result[1]);
  })
  .catch((err) => {
    console.error("Error reading file :", err);
  });

promise1 = new Promise((resolve) => setTimeout(resolve, 3000, "First"));
promise2 = new Promise((resolve) => setTimeout(resolve, 2000, "Second"));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log("Winner:", result); // Output: First
  })
  .catch((err) => {
    console.error("Error:", err);
  });
