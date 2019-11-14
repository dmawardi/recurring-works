const passport = require("passport");
const LocalStrategy = require("./local-strategy");
const User = require("../user");

// Called on login, saves the id to session req.session.passport.user
passport.serializeUser((user, done) => {
  console.log("Serialized: " + user.user_id);
  return done(null, user.user_id);
});
passport.deserializeUser((id, done) => {
  console.log("DeserializeUser called");
  User.findByID(id)
    .then(data => {
      return done(null, data);
    })
    .catch(err => {
      return done(err);
    });
});

passport.use(LocalStrategy);

module.exports = passport;
