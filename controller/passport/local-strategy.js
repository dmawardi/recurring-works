const LocalStrategy = require("passport-local").Strategy;
const User = require("../user");
const bcrypt = require("bcrypt");

const authenticateUser = async (email, password, done) => {
  // Find user by email in database and store: user
  let user = await User.findByEmail(email);
  console.log("User found by email: ", user);

  // If the results length is not greater than 0
  if (user.length == 0 || user.length == null) {
    // No user was found with the email
    console.log("No user with that email");
    return done(null, false, { message: "No User with that email" });
  }

  //   If no issues, Extract required data
  user = user[0].dataValues;
  console.log("extracted user: ", user);

  try {
    // Try to decrypt and compare stored password with input password
    if (await bcrypt.compare(password, user.password)) {
      // Successful match found
      console.log("success! Returning user: ", user);
      // Passed all tests. Done without error (null), return user
      return done(null, user);
    } else {
      // Password did not match
      console.log("Password Incorrect");

      // Callback function: Done with no (null) error, user/pass did not match (false), and message
      return done(null, false, { message: "Password incorrect" });
    }
  } catch (err) {
    // Return error
    return done(err);
  }
};

const localStrategy = new LocalStrategy(
  { usernameField: "email" },
  authenticateUser
);

// Initialize new passport package
function initialize(passport) {
  // Store aync function in authenticateUser
  // Function takes email, password and cb function
}

module.exports = localStrategy;
