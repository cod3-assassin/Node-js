const express = require("express");

const app = express();
const port = 4000;

app.get("/async-error", async (req, res, next) => {
  try {
    //Simulating async error
    await Promise.reject(new Error("Async Error occured !"));
  } catch (err) {
    next(err); // Pass the error to the error-handling middleware
  }
});

// Error-handling middleware

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Somthing Broke !");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
