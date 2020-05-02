var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mealsRouter  = require('./routes/meals');
var authRouter  = require('./routes/auth')
var userRouter = require('./routes/users')
var groceryList = require('./routes/groceryList')
const config = require('../backend/config')
var cors = require('cors')


//
//mongoose configures mongoose for later
require('./db.js')

const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(cors())


// ===============
//     PASSPORT
// ===============
const passport = require("passport");
var User = require("./models/user")



// connectDB();
// app.use(connectDB);
////////////////////////////////////////////////////////////// COMMMENTED FOR NOW
app.use(express.json({extended: false}));
// app.use('/api/userModel', require('./API/User'));

// const db = require('./db');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));


// =============================
//    PASSPORT CONFIGURATION
// =============================
app.use(require('express-session')({
	secret: " some long string",
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


const mongoose = require('mongoose');

passport.serializeUser(function(user, done) {
	done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
	  if(mongoose.Types.ObjectId.isValid(id))
			User.findById(id, function(err, user) {
			  done(err, user);
	});
  
  });

// ========================================
//    PASSPORT JWT CONFIGURATION
// ========================================
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport.use(new JWTStrategy({
	jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
	secretOrKey: `${config.JWTSecret}`
	}, 
	function(jwtPayload, cb) {
		console.log("Entered JWT Strategy")
		return User.findOne({userid: jwtPayload.userid})
			.then(user => {
				if (user.isLoggedIn)
					return cb(null, user);
				else 
					return cb(null, {message: "User is not logged in."})
			})
			.catch(err => {
				return cb(err);
			});
	}
));



// ========================================
//    PASSPORT LOCAL CONFIGURATION
// ========================================
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy( function (username, password, done) {
		const query = {email: username};
		User.findOne(query, function(error, user) {
			// error calling findOne
			if (error) {
				console.log("Error in finding user passport local")
				return done(error)
			}
			
			// Invalid username or password
			if (!user)
				return done(null, false)

			// check password
			user.comparePassword(password, user.password, function(err, isMatch) {
				if (err) { return done(err) }
				
				if(!isMatch) { return done(null, false) }

				return done(null, user);
			})
		})
}));



// ========================================
//    PASSPORT GOOGLE OAUTH CONFIGURATION
// ========================================

var GoogleStrategy = require('passport-google-oauth2').OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.

var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

passport.use(new GoogleStrategy({
	clientID:     config.googleClientId,
	clientSecret: config.googleClientSecret,
	callbackURL: "http://localhost:4000/auth/google/callback",
	passReqToCallback   : true
},
	function(profile, done) {
		var isNewUser = false;
		query = {userid : profile.id}
		console.log("Successful Google Login callback")
		// Find the document
		User.findOneAndUpdate(query, {}, function(error, user) {
			if (!error) {
				// If the document doesn't exist
				if (!user) {
					console.log("No User Found: Creating new user")
					// Create it
					isNewUser = true;
					user = new User({
						isLoggedIn: true,
						userid: profile.id, 
						email: profile.email,
					});
				}
				else{
					console.log("Found user: Setting to isLoggedIn = true")
					user.isLoggedIn = true;
				}
				// Save the document
				user.save(function(error) {
					if (!error) {
						console.log("Saved user information")
						const payload = { result: user, isNewUser: isNewUser}
						//Essentially appends user to req in callback
						return done(null, payload)
						// Do something with the document
					} else {
						console.log("Error saving user")
						console.log("Error: " + error)
						throw error;
					}
				});
			} else {
				console.log("Eror findining user in Google Login")
				console.log("Error: " + error)
				throw error;
			}
		});
	})
)

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});


// ======================
//      USE ROUTES
// ======================
app.use('/auth', authRouter);
app.use('/user', userRouter);

//app.use('/meals', passport.authenticate('jwt', { session: false,  successRedirect: '/week', failureRedirect: '/auth/google' }), mealsRouter);
app.use('/meals', passport.authenticate('jwt', {session: false}), mealsRouter);
app.use('/groceryList', passport.authenticate('jwt', {session: false, successRedirect: '/meals/groceryList',
                                   failureRedirect: '/login' }), groceryList);


// ===========================
//       ERROR HANDLING
// ===========================
// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});


// =================
//     SETTINGS
// =================
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://api.kroger.com/v1/connect/oauth2/token",
	"method": "POST",
	"headers": {
		"Content-Type": "application/x-www-form-urlencoded",
		"Authorization": "Basic {{base64(“CLIENT_ID:CLIENT_SECRET”)}}"
	},
	"data": {
		"grant_type": "client_credentials",
		"scope": "{{scope}}"
	}
}
var port = 4000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
module.exports = app;
