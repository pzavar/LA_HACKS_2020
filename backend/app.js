var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mealsRouter  = require('./routes/meals');
var authRouter  = require('./routes/auth')
var groceryList = require('./routes/groceryList')
const config = require('../backend/config')
//
//mongoose configures mongoose for later
require('./db.js')

const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

// ===============
//     PASSPORT
// ===============
var passport = require("passport");
var LocalStrategy = require("passport-local");
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
app.use(cookieParser());
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
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var GoogleStrategy = require('passport-google-oauth').OAuthStrategy;

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(new GoogleStrategy({
    consumerKey: config.googleClientId,
    consumerSecret: config.googleClientSecret,
    callbackURL: "localhost:4000/auth/google/callback"
  },
  function(token, tokenSecret, profile, done) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
      });
  }
));

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});


// ======================
//      USE ROUTES
// ======================
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/meals', mealsRouter);
app.use('/groceryList', groceryList);


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
