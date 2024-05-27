function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;

  if (auth && auth === "Bearer token123") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}

module.exports = authMiddleware;
