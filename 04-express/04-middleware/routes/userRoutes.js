const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/user", authMiddleware, (req, res) => {
  res.send("User Profile");
});

module.exports = router;
