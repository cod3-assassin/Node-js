const express = require("express");
const router = express.Router();
const requestTimeMiddleware = require("../middlewares/requestTimeMiddleware");

// Apply the requestTimeMiddleware to this route
router.use(requestTimeMiddleware);

router.get("/time", (req, res) => {
  res.send(`Current time is ${req.requestTime}`);
});

module.exports = router;
