const jwt = require("jsonwebtoken");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NzU4OTYiLCJuYW1lIjoiSm9obiBkb2UiLCJpYXQiOjE3MTcxMzU5NDYsInJvbGUiOiJhZG1pbiJ9.txvcJCMHL1slWzjQn6t3t1KsLwUJa_K1dx09PNE_OVs";

const secret = "Your-256-bit-secret";

try {
  const decoded = jwt.verify(token, secret, { algorithms: ["HS256"] });

  console.log("Decoded JWT ", decoded);
} catch (err) {
  console.error("Invalid Token !", err.message);
}
console.log(secret)