const express = require("express");

const router = express.Router();

router.get("/contact", (req, res) => {
  res.send("Welcome to the Contact page ");
});

module.exports = router;
