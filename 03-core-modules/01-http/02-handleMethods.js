const http = require("http");

const server = http.createServer((req, res) => {
  switch (req.method) {
    case "GET":
      console.log("GET Request Recived !");
      res.end("Give the GET rescponce");
      break;
    case "POST":
      console.log("POST Request Recived !");
      res.end("Give the POST rescponce");
      break;
    case "PUT":
      console.log("PUT Request Recived !");
      res.end("Give the PUT rescponce");
      break;
    case "DELETE":
      console.log("DELETE Request Recived !");
      res.end("Give the DELETE rescponce");
      break;
    case "PATCH":
      console.log("PATCH Request Recived !");
      res.end("Give the PATCH rescponce");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log("Server Started !");
});
