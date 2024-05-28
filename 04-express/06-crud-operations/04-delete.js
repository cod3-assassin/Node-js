// delete.js
const express = require("express");
const router = express.Router();
const items = require("./items");

// DELETE: Delete an item by ID
router.delete("/items/:id", (req, res) => {
  const itemIndex = items.findIndex(
    (item) => item.id === parseInt(req.params.id)
  );
  if (itemIndex === -1) {
    return res.status(404).json({ error: "Item not found" });
  }

  items.splice(itemIndex, 1);
  res.status(204).send();
});

module.exports = router;
