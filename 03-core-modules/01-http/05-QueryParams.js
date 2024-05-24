const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parseUrl = url.parse(req.url, true);
  const pathname = parseUrl.pathname;
  const query = parseUrl.query;

  res.setHeader("Content-Type", "text/html");

  //Route handle

  if (pathname === "/") {
    res.writeHead(200);
    res.end("Home Page");
  } else if (pathname === "/search") {
    const searchTerm = query.q;
    if (searchTerm) {
      res.writeHead(200);
      res.end(`search result for : ${searchTerm}`);
    } else {
      res.writeHead(400);
      res.end("400 Bad request : Missing search term !");
    }
  } else {
    res.writeHead(404);
    res.end("404 Not Found !");
  }
});

server.listen(3000, () => {
  console.log("server running on port 3000");
});
