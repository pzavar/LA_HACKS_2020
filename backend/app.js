var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mealsRouter  = require('./routes/meals');
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

app.use(express.json({extended: false}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
	res.locals.currentUser = req.user;
	next();
});


// ======================
//      USE ROUTES
// ======================
app.use('/meals',  mealsRouter);
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
