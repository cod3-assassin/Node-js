const express = require("express");

const app = express();

const port = 4000;

app.get("/service", (req, res) => {
  res.send("Service page !");
});

app.post("/login", (req, res) => {
  res.send("Login page !");
});

app.put("/profile", (req, res) => {
  res.send("Profile Update page");
});

app.delete("/account", (req, res) => {
  res.send("Account delete page ");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
