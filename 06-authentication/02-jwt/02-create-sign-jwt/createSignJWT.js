const jwt = require("jsonwebtoken");

// Secret key for signing the JWT

const secretKey = "your-256-bit-secret";

// Payload data

const payload = {
  sub: "1234567890",
  name: "Skiper Doe",
  iat: Math.floor(Date.now() / 1000), // Issued at - current time in seconds
};

// Create and sign the JWT

const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });

console.log("Genrated JWT :", token);
