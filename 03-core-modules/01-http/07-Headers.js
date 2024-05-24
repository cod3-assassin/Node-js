const http = require("http");

const server = http.createServer((req, res) => {
  //Log the requet Headers
  console.log("Request Headers :", req.headers);

  //set Responce Headers
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Custom-Header", "CustomHeaderValue");

  //Handel Diffrent Routes

  if (req.url === "/") {
    res.writeHead(200);
    res.end("Home page !");
  } else if (req.url === "/about") {
    res.writeHead(200);
    res.end("About page !");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("404 Not found  !");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
