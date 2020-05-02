var fetch = require('node-fetch')
var express = require('express');
const request = require('request')
const config = require('../config')
var router = express.Router();
var passport = require('passport');
const jwt = require('jsonwebtoken');
var User = require('../models/user')
const LocalStrategy = require('passport-local').Strategy;


const { v4: uuidv4 } = require('uuid'); // Time Stamp user id creation

// ============================
// 		LOCAL AUTH LOGIC
// ============================
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) { return done(null, false); }
//       if (!user.verifyPassword(password)) { return done(null, false); }
//       return done(null, user);
//     });
//   }
// ));


// router.post('/login', function(req, res, next) {
// 	passport.authenticate('local', {session: false}, (err, user, info) => {
// 		if (err || !user) {
// 			return res.status(400).json({
// 				message: 'Something went wrong',
// 				user: user
// 			})
// 		}
// 		//http://www.passportjs.org/docs/login/
// 		// req.login(user, {session: false}, (err) => {
// 		// 	if (err) {
// 		// 		res.send(err);
// 		// 	}

// 		const token = jwt.sign(user.userid, `${config.JWTSecret}`);
// 		return res.json({user, token});
// 	});
// }) 


// ========================
//    REGISTRATION LOGIC
// ========================
router.post("/reg", function (req, res) {
	const {	email, 
			password, 
			budget, 
			diet, 
			exclude, 
			targetCalories, 
			employment, 
			age } = req.body;

	const userid = uuidv4()
	const user = new User({
		userid: userid,
		isLoggedIn: true,
		email: email,
		password: password,
		budget: budget, 
		diet: diet,
		exclude, exclude, 
		targetCalories: targetCalories,
		employment: employment,
		age: age,
	})

	user.save(function(error, user) {
		console.log(error)

		if(error) {
			console.log("Error saving user")
			console.log("Error: " + error);
			return console.error(error);
		} else {
			const tokenPayload = {userid: user.userid};
			const token = 'Bearer ' + jwt.sign(tokenPayload, `${config.JWTSecret}`);
			const returnPayload = {user: user, token: token};

			res.json(returnPayload);
		}
	})
});


module.exports = router;
