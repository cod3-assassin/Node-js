const express = require("express");
const path = require("path");
const app = express();
const port = 4000;

app.use(express.json());

// Serve the static HTML file
app.use(express.static(path.join(__dirname, "public")));

// Sample data for items
const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

// Endpoint to get all items
app.get("/items", (req, res) => {
  res.json(items);
});

// Endpoint to get item by ID
app.get("/item/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
