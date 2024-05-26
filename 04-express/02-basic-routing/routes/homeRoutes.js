// routes/homeRoutes.js

const express = require("express");
const router = express.Router();

router.get("/info/home", (req, res) => {
  res.send("Welcome to the Home Page");
});

module.exports = router;
