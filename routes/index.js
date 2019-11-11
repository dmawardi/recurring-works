const path = require("path");
const router = require("express").Router();
const apiRoutes = require(path.join(__dirname, "/API/apiRoutes"));
// Encryption package
const bcrypt = require("bcrypt");
const passport = require("passport");

// Custom middleware function that checks if a user is authenticated to continue, and if not, redirects to login
function allowThroughIfAuthenticated(req, res, next) {
  // If user is authenticated
  if (req.isAuthenticated()) {
    console.log("Allowing through to requested page");
    // Return callback function
    return next();
  }
  // Else redirect to login page
  console.log("Redirect to login page");
  res.redirect("/login");
}

// Custom middleware function that checks if a user is authenticated and if not, redirects to login
function blockIfAuthenticated(req, res, next) {
  // If user is authenticated
  if (req.isAuthenticated()) {
    console.log("Redirect to index");
    // Return callback function
    return res.redirect("/");
  }
  // Else redirect to login page
  console.log("Allow through");
  next();
}

// API Routes
router.use("/api", apiRoutes);

// If the main page is opened, redirect user using middleware to login page
router.get("/", allowThroughIfAuthenticated, function(req, res) {
  // Why is this no longer being triggered????
  console.log("Hitting Home!");

  console.log("Hitting Home! User: ", req.user);
  // res.send(req.user);
  //   res.sendFile("index.html");
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// Login route
// If the user is already logged in, redirect user using middleware to index
router.get("/login", function(req, res) {
  console.log("Hitting Login");
  //   res.sendFile("index.html");
  res.sendFile(path.join(__dirname, "../client/login.html"));
});

// Register route
router.get("/register", blockIfAuthenticated, function(req, res) {
  console.log("Hitting Register");
  //   res.sendFile("index.html");
  res.sendFile(path.join(__dirname, "../client/register.html"));
});

// const User = require("../controller/user");

module.exports = router;
