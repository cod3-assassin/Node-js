const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/home":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Home Page\n");
      break;
    case "/about":
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("About Page\n");
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Not Found\n");
      break;
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
