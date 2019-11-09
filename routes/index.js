const path = require("path");
const router = require("express").Router();
const apiRoutes = require(path.join(__dirname, "/API/apiRoutes"));

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  console.log("Hitting Home");
  res.send("Home Page");
  //   res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
