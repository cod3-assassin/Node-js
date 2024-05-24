const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    // Collect data from the request stream
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Once all data is collected, process the body
    req.on("end", () => {
      //Try parsing JSON
      try {
        const jsonData = JSON.parse(body);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "JSON recived ", data: jsonData }));
      } catch (e) {
        //If not JSON assume it's URL-encoded form data
        const formData = new URLSearchParams(body);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            message: "Form data recived ",
            data: Object.fromEntries(formData),
          })
        );
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text.html" });
    res.end("404 Not found !");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
