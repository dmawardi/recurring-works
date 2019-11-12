// Require dotenv for env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

var express = require("express");
const passport = require("passport");
// Encryption package
const bcrypt = require("bcrypt");
const flash = require("express-flash");
const session = require("express-session");

const initializePassport = require("./controller/passport-config");
initializePassport(passport);

// Import db
var db = require("./models");

var path = require("path");
var routes = require("./routes");

// Init express server and port
var app = express();
var PORT = process.env.PORT || 3001;

// Middleware
// Parse application body and use JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
// Allows use to use DELETE methods in forms for ease of logout

// Serve static content for the app from public directory
app.use(express.static(path.join(__dirname, "client")));

// Use imported routes for server
app.use(routes);

// { force: true }
// Test Connection
db.sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
    app.listen(PORT, function() {
      console.log("Server listening on: http://localhost:" + PORT);
    });
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
