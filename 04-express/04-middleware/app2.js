const express = require("express");

const app = express();

const port = 4000;

app.use((req, res, next) => {
  console.log(`Request URL ${req.url}`);
  next(); // Pass control to the next middleware function
});

app.use((req, res, next) => {
  console.log("Time :", Date.now());
  next();
});

//Route handler
app.get("/", (req, res) => {
  res.send("Welcome to my Express app with the middleware !");
});

app.get("/about", (req, res) => {
  res.send("About page with middleware !");
});

// Error-handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
