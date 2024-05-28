// update.js
const express = require("express");
const router = express.Router();
const items = require("./items");

// UPDATE: Update an item by ID
router.put("/items/:id", (req, res) => {
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

module.exports = router;
