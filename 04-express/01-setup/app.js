const express = require("express");

const app = express();
const port = 3000;

// Route to handle the home page with a personalized greeting
app.get("/", (req, res) => {
  const name = req.query.name || "World"; // Use query parameter
  res.send(`Hello, ${name}!`);
});

// Route to handle dynamic names in the URL path
app.get("/:name", (req, res) => {
  const name = req.params.name; // Use path parameter
  res.send(`Hello, ${name}!`);
});

// Route for the about page
app.get("/about", (req, res) => {
  res.send("This is an Express.js setup example.");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
