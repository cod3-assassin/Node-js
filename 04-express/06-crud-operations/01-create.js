const express = require("express");

const router = express.Router();

const items = require("./05-items");

// CREATE: Add a new item

router.post("/items", (req, res) => {
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

module.exports = router;
