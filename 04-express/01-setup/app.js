const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World !");
});

app.listen(3000, (err) => {
  console.log(`server is runnign at the http://localhost:3000`);
});
