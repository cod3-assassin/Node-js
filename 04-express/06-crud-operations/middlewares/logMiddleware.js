// middlewares/logMiddleware.js

function logMiddleware(req, res, next) {
  console.log(
    `${req.method} ${req.path} - Query: ${JSON.stringify(
      req.query
    )}, Body: ${JSON.stringify(req.body)}`
  );
  next();
}

module.exports = logMiddleware;
