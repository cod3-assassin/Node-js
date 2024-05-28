const express = require("express");
const app = express();

const port = 4000;

//serving the static file from the "public" directory

app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
