const express = require("express");
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

app.post("/form-data", (req, res) => {
  const formData = req.body;
  console.log("Form Data :", formData);
  res.json({ formData });
});

app.post("/json-data", (req, res) => {
  const jsonData = req.body;
  console.log("JSON Data :", jsonData);
  res.json({ jsonData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
