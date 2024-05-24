const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const log = `${Date.now()} Request Recived !\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello Form the server !");
  });
});

server.listen(3000, () => {
  console.log("server is started !");
});
