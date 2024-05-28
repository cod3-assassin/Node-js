// read.js
const express = require("express");
const router = express.Router();
const items = require("./items");

// READ: Get all items with pagination
router.get("/items", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedItems = items.slice(startIndex, endIndex);
  res.json(paginatedItems);
});

// READ: Get a single item by ID
router.get("/items/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ error: "Item not found" });
  }
  res.json(item);
});

module.exports = router;
