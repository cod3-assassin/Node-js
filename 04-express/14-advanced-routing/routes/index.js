const express = require("express");

const router = express.Router();

// Main route : /(Home)

router.get("/", (req, res) => {
  res.send("Welcome to Home !");
});

// About route: /about

router.get("/about", (req, res) => {
  res.send("About us Page ");
});
module.exports = router;
