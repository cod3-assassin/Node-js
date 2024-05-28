const express = require("express");
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Welcome to my Express app!");
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something went wrong to startign the server !", err);
  }
  console.log(`server listen at http://localhost:${port}`);
});
