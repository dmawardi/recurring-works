// Require dotenv for env variables
require("dotenv").config();
var express = require("express");

// Import db
var db = require("./models");

var path = require("path");

// Init express server and port
var app = express();
var PORT = process.env.PORT || 8000;

// Middleware
// Parse application body and use JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static content for the app from public directory
app.use(express.static(path.join(__dirname, "client")));

// Use imported routes for server
// app.use(routes);

// Test Connection
db.sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
