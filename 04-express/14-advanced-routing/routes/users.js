const express = require("express");
const router = express.Router();

// Nested route: /users/:id
router.get("/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: "User details :", userId });
});

// Nested route: /users/:id/orders

router.get("/:id/orders", (req, res) => {
  const userId = req.params.id;
  res.json({ message: "User orders", userId });
});

module.exports = router;
