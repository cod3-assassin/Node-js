const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

// Function to serve static files
const serveStaticFile = (filePath, res) => {
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".js":
      contentType = "text/javascript";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          (err, content) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(content, "utf8");
          }
        );
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf8");
    }
  });
};

// Create an HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (pathname === "/") {
    serveStaticFile(path.join(__dirname, "public", "index.html"), res);
  } else if (pathname === "/about") {
    serveStaticFile(path.join(__dirname, "public", "about.html"), res);
  } else if (pathname === "/api") {
    const queryObject = parsedUrl.query;
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(queryObject));
  } else {
    serveStaticFile(path.join(__dirname, "public", pathname), res);
  }
});

// Server listens on port 3000
server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});

// Example of making an HTTP GET request
const makeGetRequest = () => {
  http
    .get("http://www.example.com", (resp) => {
      let data = "";

      // A chunk of data has been received.
      resp.on("data", (chunk) => {
        data += chunk;
      });

      // The whole response has been received.
      resp.on("end", () => {
        console.log("Response data:", data);
      });
    })
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
};

makeGetRequest();
