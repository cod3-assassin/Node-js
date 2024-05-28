const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());

// Third-party middleware: Morgan for logging
app.use(morgan("combined"));

// Custom middleware to log HTTP method
app.use((req, res, next) => {
  console.log("HTTP Method:", req.method);
  next();
});

// Application-level middleware to log request URL
app.use((req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  next();
});

// Application-level middleware to log timestamp
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// Route to handle GET requests for a product by ID
app.get("/product/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Product Id: ${productId}`);
});

// Route to handle POST requests for submitting data
app.post("/submit", (req, res) => {
  const body = req.body;
  res.json({ "Data received": body });
});

// Route to handle GET requests for searching with a query parameter
app.get("/search", (req, res) => {
  const query = req.query.query;
  res.send(`Search results for: ${query}`);
});

// Route to handle PUT requests for updating data by ID
app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  if (!id) {
    return res.status(400).json({ error: "ID parameter is required" });
  }

  if (Object.keys(updatedData).length === 0) {
    return res.status(400).json({ error: "Request body is required" });
  }

  res.json({ id, updatedData });
});

// Route to handle GET requests for the contact page
app.get("/contact", (req, res) => {
  res.send("Contact Page with middleware!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
