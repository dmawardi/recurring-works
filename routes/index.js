const path = require("path");
const router = require("express").Router();
const apiRoutes = require(path.join(__dirname, "/API/apiRoutes"));
const loginRoutes = require(path.join(__dirname, "./login"));

// Currently unused middleware
// Custom middleware function that checks if a user is authenticated to continue, and if not, redirects to login
function allowThroughIfAuthenticated(req, res, next) {
  console.log("Login status: " + req.isAuthenticated());
  // If user is authenticated
  if (req.isAuthenticated()) {
    console.log("Allowing through to requested page");
    // Return callback function
    return next();
  }
  // Else redirect to login page
  console.log("Redirect to login page");
  // res.redirect("/login");
}
// Custom middleware function that checks if a user is authenticated and if not, redirects to login
function blockIfAuthenticated(req, res, next) {
  // If user is authenticated
  if (req.isAuthenticated()) {
    console.log("Redirect to index");
  }
  // Else redirect to login page
  console.log("Allow through");
  next();
}

// API Routes
router.use("/api", apiRoutes);
// Login Routes
router.use("/account", loginRoutes);

// If main page opened, direct to react app
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;
