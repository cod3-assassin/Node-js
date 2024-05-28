const express = require("express");
const app = express();
const port = 4000;

// Define routes

app.get("/", (req, res) => {
  res.send("Welcome to my express app !");
});
app.get("/about", (req, res) => {
  res.send("About page !");
});

app.post("/contact", (req, res) => {
  res.send("Contact Page !");
});

app.put("/update", (req, res) => {
  res.send("Update page !");
});

app.delete("/delete", (req, res) => {
  res.send("Delete page !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
