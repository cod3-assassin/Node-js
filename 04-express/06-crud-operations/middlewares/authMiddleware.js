// middlewares/authMiddleware.js

function authMiddleware(req, res, next) {
  const token = req.headers["authorization"];
  if (token === "Bearer mysecrettoken") {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

module.exports = authMiddleware;
