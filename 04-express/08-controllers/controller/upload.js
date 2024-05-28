const express = require("express");
const router = express.Router();

router.get("/upload", (req, res) => {
  res.send("Upload a file !");
});

module.exports = router;
