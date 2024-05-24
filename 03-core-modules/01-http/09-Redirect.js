const http = require("http");

// Utility function to send a redirect response
const redirect = (res, statusCode, location) => {
  res.writeHead(statusCode, { Location: location });
  res.end();
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Home Page</h1>");
      break;
    case "/old-page":
      // 301 Moved Permanently
      redirect(res, 301, "/new-page");
      break;
    case "/temporary-redirect":
      // 302 Found (Temporary Redirect)
      redirect(res, 302, "/new-page");
      break;
    case "/new-page":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>New Page</h1>");
      break;
    case "/see-other":
      // 303 See Other
      redirect(res, 303, "/other-page");
      break;
    case "/other-page":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Other Page</h1>");
      break;
    case "/temp-redirect":
      // 307 Temporary Redirect
      redirect(res, 307, "/new-temp-page");
      break;
    case "/new-temp-page":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>New Temp Page</h1>");
      break;
    case "/permanent-redirect":
      // 308 Permanent Redirect
      redirect(res, 308, "/new-perm-page");
      break;
    case "/new-perm-page":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>New Perm Page</h1>");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 Not Found</h1>");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
