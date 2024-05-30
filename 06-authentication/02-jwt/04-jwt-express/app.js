const express = require("express");
const jwt = require("jsonwebtoken");

const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
const secretKey = "Your-256-bit-secret";

app.use(bodyParser.json());

//Dummy user data (in real application , this would be stored in a database)

const users = [
  { id: 1, username: "User1", password: "password1" },
  { id: 2, username: "User2", password: "password2" },
  { id: 3, username: "User3", password: "password3" },
];

//User login route

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    //Generate JWT token for authuneticate user

    const token = jwt.sign(
      { id: user.id, username: user.username },
      secretKey,
      { expiresIn: "1h" }
    );
    res.json({ token });
    console.log("Token Genarte :", token);
  } else {
    res.status(401).json({ message: "Invalid username or the password !" });
  }
});

// Protected route - requires valid JWT token

app.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "Protected route accessed Successfully !",
    user: req.user,
  });
});

// Middleware to verify JWT token

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1]; //Get token from authorization

  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Failed to authenticate token" });
    }
    req.user = decoded;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
