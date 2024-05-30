const jwt = require("jsonwebtoken");

const secretKey = "your-256-bit-secret";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NzU4OTYiLCJuYW1lIjoiSm9obiBkb2UiLCJpYXQiOjE3MTcwOTE4MTEsInJvbGUiOiJhZG1pbiJ9._7AnrjPDClMRaVnu1oFh9d65xaStmu-N8AaHy7sa2aE";

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error("JWT verfication faild :", err.message);
  } else {
    console.log("Decoded JWT :", decoded);
  }
});
