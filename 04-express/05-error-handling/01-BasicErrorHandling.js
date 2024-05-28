const express = require("express");

const app = express();
const port = 4000;

//Router that trigger an error

app.get("/error", (req, res, next) => {
  const err = new Error("Something went wrong !");

  next(err); // Pass the error to the error-handling middleware
});

// Error-handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send(500).send("Something Broke !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
