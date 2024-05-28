const express = require("express");

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to handle GET requests for a product by ID
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Product Id: ${productId}`);
});

// Route to handle POST requests for submitting data
app.post("/submit", (req, res) => {
  const body = req.body;
  res.json({ "Data received": body });
});

// Route to handle GET requests for searching with a query parameter
app.get("/search", (req, res) => {
  const query = req.query.query;
  res.send(`Search results for: ${query}`);
});

// Route to handle PUT requests for updating data by ID
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  res.json({ id, updatedData });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
