var passport = require("passport");
var keys = require('./keys');
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
 new GoogleStrategy(
  {
   clientID: keys.google.clientID,
   clientSecret: keys.google.clientSecret,
   callbackURL: "http://localhost:3000/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, done) {
      var userData = {
          email: profile.emails[0].value,
          name: profile.displayName,
          token: accessToken
        };
        done(null, userData);
    }
    )
);