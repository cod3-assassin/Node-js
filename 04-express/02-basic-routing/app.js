const express = require("express");
const app = express();
const port = 3000;

// Import routes
const indexRoutes = require("./routes/indexRoutes");
const homeRoutes = require("./routes/homeRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const contactRoutes = require("./routes/contactRoutes");

// Use routes
app.use("/", indexRoutes);
app.use("/", homeRoutes);
app.use("/", aboutRoutes);
app.use("/", contactRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
