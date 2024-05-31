const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "your-256-bit-secret";

app.use(bodyParser.json());

// Route to create a token
app.post("/login", (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, secretKey, {
    algorithm: "HS256",
    expiresIn: "1h",
  });
  res.json({ token });
});

// Middleware to verify token
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("Token is required");
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};

// Protected route
app.get("/protected", verifyToken, (req, res) => {
  res.send("This is a protected route");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
