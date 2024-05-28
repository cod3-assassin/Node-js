const express = require("express");
const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data store
let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

// CREATE: Add a new item
app.post("/items", (req, res) => {
  const { name, description } = req.body;
  if (
    !name ||
    !description ||
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    return res
      .status(400)
      .json({ error: "Name and description must be non-empty strings" });
  }

  const newItem = {
    id: items.length + 1,
    name,
    description,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// READ: Get all items with pagination
app.get("/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = items.slice(startIndex, endIndex);
  res.json(paginatedItems);
});

// READ: Get a single item by ID
app.get("/items/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

// UPDATE: Update an item by ID
app.put("/items/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }

  const { name, description } = req.body;
  if (
    !name ||
    !description ||
    typeof name !== "string" ||
    typeof description !== "string"
  ) {
    return res
      .status(400)
      .json({ error: "Name and description must be non-empty strings" });
  }

  item.name = name;
  item.description = description;
  res.json(item);
});

// DELETE: Delete an item by ID
app.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(itemIndex, 1);
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
