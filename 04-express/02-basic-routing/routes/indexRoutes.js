const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.query.name || "World"; // Use query parameter
  res.send(`Hello, ${name}! Welcome to the Index Page`);
});

module.exports = router;
