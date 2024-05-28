const express = require("express");
const app = express();
const port = 4000;
// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my Express app !");
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID :${userId}`);
});

app.post("/data", (req, res) => {
  const body = req.body;
  res.json({ receivedData: body });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
