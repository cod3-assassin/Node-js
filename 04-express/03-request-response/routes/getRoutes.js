const express = require("express");

const router = express.Router();

//Route  to handel the GET requests

router.get("/user", (req, res) => {
  const userId = req.query.id || "unknown";
  res.send(`GET request recived . User ID : ${userId}`);
});

router.get("/product", (req, res) => {
  const product = req.query.prod || "Unknown";
  res.send(`GET request for the product received . Product : ${product}`);
});

module.exports = router;
