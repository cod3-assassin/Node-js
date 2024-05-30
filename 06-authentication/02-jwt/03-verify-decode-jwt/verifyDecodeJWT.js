const jwt = require("jsonwebtoken");

const secretKey = "your-256-bit-secret";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNraXBlciBEb2UiLCJpYXQiOjE3MTcwNjc0OTJ9.vFGQdDpE0_MtzDx8rRemjH-9gL5ZEDlgrsX8w5cJH7I";

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.error("JWT verfication faild :", err.message);
  } else {
    console.log("Decoded JWT :", decoded);
  }
});
