var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mealsRouter  = require('./routes/meals');
var loginRouter = require('./routes/auth')
var groceryList = require('./routes/groceryList')
var app = express();

var passport      = require("passport");
var LocalStrategy = require("passport-local");
var User = require("./models/user")

// const MongoClient = require('mongodb').MongoClient;
// const ObjectId = require('mongodb').ObjectID;

var passport = require('passport');
var LocalStrategy = require('passport-local');
var User = require('./models/user');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// PASSPORT CONFIGURATION
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

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/meals', mealsRouter);
app.use('/groceryList', groceryList);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

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


// app.listen(3000, () => {
//   MongoClient.connect()
// })


module.exports = app;
