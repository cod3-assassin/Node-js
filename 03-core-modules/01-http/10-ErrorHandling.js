const http = require("http");

const server = http.createServer((req, res) => {
  try {
    // Simulate an error for demonstration
    throw new Error("Simulated error");
  } catch (err) {
    // Handle synchronous errors
    console.error("Error:", err.message);
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>500 Internal Server Error</h1>");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
