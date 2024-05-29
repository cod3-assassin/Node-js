const express = require("express");

const app = express();

const port = 4000;

// Route to demonstrate query parameters
app.get("/items", (req, res) => {
  const { category, sortBy } = req.query;
  res.json({ message: "Query parameters received:", category, sortBy });
});

// Route to demonstrate query parameters with defaults
app.get("/search", (req, res) => {
  const { query, page = 1, limit = 10 } = req.query;
  res.json({ message: "Search query received:", query, page, limit });
});

// Route for products with query parameters
app.get("/products", (req, res) => {
  const { category, minPrice = 0, maxPrice = 1000 } = req.query;
  res.json({
    message: "Product query received:",
    category,
    minPrice,
    maxPrice,
  });
});

app.get("/users", (req, res) => {
  const { name, age, status = "active" } = req.query;

  res.json({ message: "User Query recived ", name, age, status });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
