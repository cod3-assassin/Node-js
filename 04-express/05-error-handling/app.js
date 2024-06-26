const express = require("express");

const app = express();
const port = 4000;

// Middleware to simulate an error
app.get("/", (req, res, next) => {
  const err = new Error("Something went wrong !");
  err.status = 500;
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something Broke !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
