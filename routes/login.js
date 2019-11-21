const express = require("express");
const router = express.Router();
const User = require("../controller/user");
// // Encryption package
const bcrypt = require("bcrypt");
const passport = require("passport");

// Register POST route
router.post("/register", async function(req, res) {
  // Encrypt password
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  // Insert new record into users table
  User.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: hashedPassword
  })
    .then(data => {
      //   User created

      res.json({ message: "Success! Your account has been registered." });
    })
    .catch(err => {
      const message =
        "Failed to create new account: Error msg: " + err.errors[0].message;
      console.error(message);
      res.send("error: " + err);
    });
});

// Post route to login
router.post(
  "/login",
  passport.authenticate("local", {
    // Redirect if success or fail
    // successRedirect: "/",
    failureRedirect: "/login",
    // Use express flash to display error to user
    failureFlash: true
  }),
  (req, res) => {
    // I've got the user here. What can I do with it in order to render something differently?
    console.log("Authenticating user. req.user: ", req.user);
    // console.log("res: ", res);
    // Redirect?
    if (req.user) {
      console.log("User ID Logged in: " + req.user.user_id);
      res.send({
        user_id: req.user.user_id,
        first_name: req.user.first_name,
        last_name: req.user.last_name
      });
    } else {
      res
        .status(500)
        .json({ error: "Failed to login. Incorrect email/password" });
    }
  }
);

// Route for user to logout
router.get("/logout", (req, res) => {
  console.log("User authenticated? ", req.isAuthenticated());
  req.logOut();
  // console.log("User authenticated? ", req.isAuthenticated());

  res.sendStatus(200);
});

module.exports = router;
