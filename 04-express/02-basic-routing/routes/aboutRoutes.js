// routes/aboutRoutes.js

const express = require("express");
const router = express.Router();

router.get("/info/about", (req, res) => {
  res.send("This is the About Page");
});

module.exports = router;
