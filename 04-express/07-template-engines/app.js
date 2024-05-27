// app.js

const express = require("express");
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set("view engine", "ejs");

// Middleware to add the current timestamp
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// Home route to render index.ejs
app.get("/", (req, res) => {
  res.render("index", { requestTime: req.requestTime });
});

// Users route to render users.ejs
app.get("/users", (req, res) => {
  const users = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Doe", email: "jane@example.com" },
  ];
  res.render("users", { users, requestTime: req.requestTime });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
