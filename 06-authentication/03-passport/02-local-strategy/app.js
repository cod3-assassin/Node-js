const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy user data
const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

// Configure Passport.js
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Invalid username or password" });
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: "secret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ message: "Profile accessed", user: req.user });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
