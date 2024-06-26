// app.js

const express = require("express");
const app = express();
const port = 3000;

// Import middlewares
const logMiddleware = require("./middlewares/logMiddleware");

// Import routes
const indexRoutes = require("./routes/indexRoutes");
const userRoutes = require("./routes/userRoutes");
const timeRoutes = require("./routes/timeRoutes");

// Use middlewares
app.use(logMiddleware);

// Use routes
app.use("/", indexRoutes);
app.use("/", userRoutes);
app.use("/", timeRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
