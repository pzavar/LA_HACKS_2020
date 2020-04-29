var fetch = require('node-fetch')
var express = require('express');
const request = require('request')
const config = require('../config')
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');
var User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy;
// ============================
// 		LOCAL AUTH LOGIC
// ============================
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

router.post('/login', function(req, res, next) {
	passport.authenticate('local', {session: false}, (err, user, info) => {
		if (err || !user) {
			return res.status(400).json({
				message: 'Something went wrong',
				user: user
			})
		}
		//http://www.passportjs.org/docs/login/
		// req.login(user, {session: false}, (err) => {
		// 	if (err) {
		// 		res.send(err);
		// 	}

		const token = jwt.sign(user.userid, `${config.JWTSecret}`);
		return res.json({user, token});
	});
}) 


// ========================
//    REGISTRATION LOGIC
// ========================
router.post("/reg", function (req, res) {
	console.log("Body we're working with")
	console.log(req.body)
	res.send("Hi")
            // email: email,
            // password: password,
            // budget: budget,
            // diet: diet,
            // exclude: exclude,
            // targetCalories: targetCalories,
	// var newUser = new User({username: req.body.username});
	// User.register(new User(newUser), req.body.password, (err, user) => {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.render("register");
	// 	}
	// 	passport.authenticate("local")(req, res, () => {
	// 		res.redirect("/campgrounds");
	// 	});
	// });
});


module.exports = router;
