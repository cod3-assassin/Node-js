const express = require("express");

const app = express();
const port = 4000;
const uploadController = require("./controller/upload");
//Define a simple controller object with methods for handling request

const controllers = {
  home: (req, res) => {
    res.send("Welcome to the Home page !");
  },
  about: (req, res) => {
    res.send("Learn more about us !");
  },
  contact: (req, res) => {
    res.send("Contact us Here ");
  },
  services: (req, res) => {
    res.send(
      "Our Services Include Web Development, SEO Optimization, and Digital Marketing."
    );
  },
  faq: (req, res) => {
    res.send("Frequently Asked Questions !");
  },
};

// Define routes and assign controller methods

app.get("/", controllers.home);
app.get("/about", controllers.about);
app.get("/contact", controllers.contact);
app.get("/services", controllers.services);
app.get("/faq", controllers.faq);
app.use("/", uploadController);

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
