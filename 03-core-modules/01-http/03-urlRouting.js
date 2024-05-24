const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      if (req.method === "GET") {
        res.end("<h1>GET Request at the home page!</h1>");
      } else if (req.method === "POST") {
        res.end("<h1>POST Request at the home page!</h1>");
      } else {
        res.statusCode = 405;
        res.end("<h1>405 Method Not Allowed</h1>");
      }
      break;
    case "/about":
      if (req.method === "GET") {
        res.end("<h1>GET Request at the about page!</h1>");
      } else if (req.method === "POST") {
        res.end("<h1>POST Request at the about page!</h1>");
      } else {
        res.statusCode = 405;
        res.end("<h1>405 Method Not Allowed</h1>");
      }
      break;
    case "/contact":
      if (req.method === "GET") {
        res.end("<h1>GET Request at the contact page!</h1>");
      } else if (req.method === "POST") {
        res.end("<h1>POST Request at the contact page!</h1>");
      } else {
        res.statusCode = 405;
        res.end("<h1>405 Method Not Allowed</h1>");
      }
      break;
    case "/project":
      if (req.method === "GET") {
        res.end("<h1>GET Request at the project page!</h1>");
      } else if (req.method === "POST") {
        res.end("<h1>POST Request at the project page!</h1>");
      } else {
        res.statusCode = 405;
        res.end("<h1>405 Method Not Allowed</h1>");
      }
      break;
    default:
      res.statusCode = 404;
      res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
