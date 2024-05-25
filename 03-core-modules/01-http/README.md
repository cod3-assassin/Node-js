# HTTP Concepts Overview

This document provides an overview of fundamental concepts in HTTP (Hypertext
Transfer Protocol) along with their implementation in Node.js.

## 01-basicServer

### Fundamental Concept:

- Setting up a basic HTTP server in Node.js.
- Listening for incoming requests.
- Sending responses to clients.

### Example:

- Creating an HTTP server using the `http` module.
- Handling different routes and sending appropriate responses.

## 02-HandelMethods

### Fundamental Concept:

- Understanding HTTP methods (GET, POST, PUT, DELETE, etc.).
- Handling different HTTP methods in a server.

### Example:

- Implementing logic to handle different HTTP methods (GET, POST, etc.) in
  Node.js.

## 03-urlRouting

### Fundamental Concept:

- Routing requests to different handlers based on the URL path.
- Organizing server logic based on routes.

### Example:

- Implementing URL routing in a Node.js server to direct requests to specific
  handlers.

## 04-staticFiles

### Fundamental Concept:

- Serving static files (HTML, CSS, JavaScript, images, etc.) from a server.

### Example:

- Configuring a Node.js server to serve static files using the `fs` module or
  dedicated middleware like `express.static`.

## 05-QueryParameter

### Fundamental Concept:

- Extracting data from query parameters in URL.
- Processing query parameters in server-side logic.

### Example:

- Parsing query parameters from URL and using them in server logic.

## 06-RequestBody

### Fundamental Concept:

- Handling data sent from clients in the request body.
- Parsing request body data for further processing.

### Example:

- Reading request body data in Node.js and processing it for different content
  types (JSON, form data, etc.).

## 07-Headers

### Fundamental Concept:

- Understanding HTTP headers and their significance.
- Manipulating request and response headers in server-side code.

### Example:

- Setting, accessing, and modifying HTTP headers in Node.js HTTP servers.

## 08-StatusCodes

### Fundamental Concept:

- HTTP status codes indicate the result of a request.
- Each status code category conveys a different type of information (1xx, 2xx,
  3xx, 4xx, 5xx).

### Example:

- Sending appropriate HTTP status codes with responses based on the outcome of
  server operations.

## 09-Redirecting

### Fundamental Concept:

- Redirecting clients to a different URL.
- Using different types of redirects (301, 302, 303, etc.) for different
  scenarios.

### Example:

- Implementing redirects in Node.js HTTP servers to guide clients to a new URL.

## 10-ErrorHandling

### Fundamental Concept:

- Handling errors that occur during server-side operations.
- Responding to errors with appropriate error codes and messages.

### Example:

- Implementing error handling logic in Node.js HTTP servers to gracefully handle
  errors and prevent server crashes.
