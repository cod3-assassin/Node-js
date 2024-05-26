const express = require("express");

const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

// Route to handle POST requests
router.post("/user", (req, res) => {
  const userName = req.body.name || "unknown";
  res.send(`POST request received. User Name : ${userName}`);
});

router.post("/order", (req, res) => {
  const orderDetails = req.body.orders || "Unknown";

  res.send(`POST request recieved . Order is : ${orderDetails}`);
});

module.exports = router;
