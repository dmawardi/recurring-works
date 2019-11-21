const LocalStrategy = require("passport-local").Strategy;
const User = require("../controller/user");
const bcrypt = require("bcrypt");
const passport = require("passport");

// Initialize new passport package
function initialize(passport) {
  // Store aync function in authenticateUser
  // Function takes email, password and cb function

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, cb) => {
    return cb(null, user.user_id);
  });
  passport.deserializeUser((id, cb) => {
    User.findByID(id)
      .then(data => {
        return cb(null, data[0]);
      })
      .catch(err => {
        return cb(err);
      });
  });
}

const authenticateUser = async (email, password, cb) => {
  // Find user by email in database and store: user
  let user = await User.findByEmail(email);

  // If the results length is not greater than 0
  if (user.length == 0 || user.length == null) {
    // No user was found with the email
    return cb(null, false, { message: "No User with that email" });
  }

  //   If no issues, Extract required data
  user = user[0].dataValues;

  try {
    // Try to decrypt and compare stored password with input password
    if (await bcrypt.compare(password, user.password)) {
      // Successful match found
      console.log("success! Returning user: ", user);
      // Passed all tests. Done without error (null), return user
      return cb(null, user);
    } else {
      // Password did not match
      console.log("Password Incorrect");

      // Callback function: Done with no (null) error, user/pass did not match (false), and message
      return cb(null, false, { message: "Password incorrect" });
    }
  } catch (err) {
    // Return error
    return cb(err);
  }
};

module.exports = initialize;
