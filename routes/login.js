const express = require("express");
const router = express.Router();
const User = require("../controller/user");
// // Encryption package
// const bcrypt = require("bcrypt");
const passport = require("passport");
// const flash = require("express-flash");
// const session = require("express-session");

// router.use(flash());
// router.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false
//   })
// );
// router.use(passport.initialize());
// router.use(passport.session());

// const initializePassport = require("../controller/passport-config");
// initializePassport(passport);

// Passport setup
// const passport = require("passport");
// // Encryption package
// const flash = require("express-flash");
// const session = require("express-session");
// app.use(
//     session({
//       secret: process.env.SESSION_SECRET,
//       resave: false,
//       saveUninitialized: false
//     })
//   );
//   app.use(passport.initialize());
//   app.use(passport.session());

// Check if needed
// router.use(cors());

// Register POST route
router.post("/register", async function(req, res) {
  console.log("Registering new user: ", req.body);
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
      console.log("server response: ", data);
      console.log("is new: ", data.isNewRecord);
      res.json({ message: "Success! Your account has been registered." });

      // Send user to login screen to login
      // res.redirect("/login");
    })
    .catch(err => {
      const message =
        "Failed to create new account: Error msg: " + err.errors[0].message;
      console.error(message);
      // res.json({error: "User already exists."});
      res.send("error: " + err);
    });
});

// Login POST route
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
    console.log("User authenticating");
    // I've got the user here. What can I do with it in order to render something differently?
    console.log("req.user: ", req.user);
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

router.get("/logout", (req, res) => {
  console.log("User authenticated? ", req.isAuthenticated());
  req.logOut();
  console.log("User authenticated? ", req.isAuthenticated());

  res.sendStatus(200);
});

module.exports = router;
