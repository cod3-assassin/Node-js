const http = require("http");

// Utility function to send a response with a specific status code and message
const sendResponse = (res, statusCode, message) => {
  res.writeHead(statusCode, { "Content-Type": "text/html" });
  res.end(`<h1>${statusCode} ${message}</h1>`);
};

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      // 200 OK
      sendResponse(res, 200, "Home Page");
      break;
    case "/about":
      // 200 OK
      sendResponse(res, 200, "About Page");
      break;
    case "/create":
      if (req.method === "POST") {
        // 201 Created
        sendResponse(res, 201, "Resource Created");
      } else {
        // 405 Method Not Allowed
        sendResponse(res, 405, "Method Not Allowed");
      }
      break;
    case "/bad-request":
      // 400 Bad Request
      sendResponse(res, 400, "Bad Request");
      break;
    case "/unauthorized":
      // 401 Unauthorized
      sendResponse(res, 401, "Unauthorized");
      break;
    case "/forbidden":
      // 403 Forbidden
      sendResponse(res, 403, "Forbidden");
      break;
    case "/not-found":
      // 404 Not Found
      sendResponse(res, 404, "Not Found");
      break;
    case "/internal-error":
      // 500 Internal Server Error
      sendResponse(res, 500, "Internal Server Error");
      break;
    case "/not-implemented":
      // 501 Not Implemented
      sendResponse(res, 501, "Not Implemented");
      break;
    case "/service-unavailable":
      // 503 Service Unavailable
      sendResponse(res, 503, "Service Unavailable");
      break;
    default:
      // 404 Not Found for any unspecified routes
      sendResponse(res, 404, "Not Found");
      break;
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
