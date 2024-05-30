const jwt = require("jsonwebtoken");

const secretKey = "Your-256-bit-secret";

const payLoad = {
  sub: "123475896",
  name: "John doe",
  iat: Math.floor(Date.now() / 1000),
  role: "admin",
};

const token = jwt.sign(payLoad, secretKey, { algorithm: "HS256" });

console.log("JWT :", token);
