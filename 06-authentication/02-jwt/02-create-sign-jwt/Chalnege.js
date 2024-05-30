const jwt = require("jsonwebtoken");

//Secret key for the singing teh JWT

const secretKey = "your-256-bit-secret";

//payload data with additional claims

const payload = {
  sub: "1234567890", //Subject - Usually the user ID
  name: "Skipper Doe", //User's Name
  iat: Math.floor(Date.now() / 1000), //Issued at - current time in seconds

  exp: Math.floor(Date.now() / 1000) + 60 * 60, //Expiring time - 1 hour from now

  role: "admin", //User's role
};

//Craete and sign the JWT

const token = jwt.sign(payload, secretKey, { algorithm: "HS256" });

console.log("Generted JWT :", token);
