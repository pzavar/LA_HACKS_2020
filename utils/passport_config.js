const passport = require('passport');
const GoogleStrategy = require('passport-GoogleStrategy.oauth20');
const keys = require("./keys");

passport.use(
    new GoogleStrategy({
        // options for the google strat
        callbackURL: "/auth/google/redirect",
        clientID = keys.google.clientID,
        clientSecret: keys.google.clientSecret
    }, () => {
        
    })
)