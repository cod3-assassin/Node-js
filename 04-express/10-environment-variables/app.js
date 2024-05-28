// Load environment variables from .env file
require("dotenv").config();

// Require express module
const express = require("express");

// Create an express app instance
const app = express();

// Get the port from environment variables or use default value
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
