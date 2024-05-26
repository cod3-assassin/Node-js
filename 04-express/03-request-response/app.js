const express = require("express");

const app = express();

const port = 3000;

//Import routes

const getRoutes = require("./routes/getRoutes");
const postRoutes = require("./routes/postRoutes");

app.use("/", getRoutes);
app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`App listning at http://localhost:${port}`);
});
