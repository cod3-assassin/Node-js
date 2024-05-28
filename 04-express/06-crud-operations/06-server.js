// server.js
const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Importing CRUD routes
const createRouter = require("./01-create");
const readRouter = require("./02-read");
const updateRouter = require("./03-update");
const deleteRouter = require("./04-delete");

// Using CRUD routes
app.use(createRouter);
app.use(readRouter);
app.use(updateRouter);
app.use(deleteRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
