// app.js

const express = require("express");
const app = express();
const port = 3000;

// Import middlewares
const logMiddleware = require("./middlewares/logMiddleware");
const errorHandlerMiddleware = require("./middlewares/errorHandlerMiddleware");

// Import routes
const userRoutes = require("./routes/userRoutes");

// Middleware to parse JSON bodies
app.use(express.json());

// Use middlewares
app.use(logMiddleware);

// Use routes
app.use("/", userRoutes);

// Error handling middleware (must be after all other middleware and routes)
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
