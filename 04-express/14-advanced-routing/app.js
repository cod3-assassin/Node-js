const express = require("express");

const app = express();

const port = 4000;
//Import Routes
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/users");

//Use Routes

app.use("./", indexRoutes);
app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
