function requestTimeMiddleware(req, res, next) {
  const currentDateTime = new Date().toISOString();
  req.requestTime = currentDateTime;
  console.log(`Request Time: ${currentDateTime}`);
  next();
}

module.exports = requestTimeMiddleware;
