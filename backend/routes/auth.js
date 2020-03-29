var express = require('express');
var router = express.Router();
var passport = require('passport')
var User = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("Inside login router")
		
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
	  console.log("Successful auth")
	  	
    res.redirect('/users/');
  };
  res.render('index', { title: 'Express' });
});

router.get('/success', function(req,res,next){
	console.log("Auth success")
	console.log(req)
})

// Authorization code redirect initiated by 'login' event from Sign In button
function redirectToLogin() {
    // Must define all scopes needed for application
    //const scope = encodeURIComponent('product.personalized cart.basic:rw profile.full');
    //const scope = 'product.personalized cart.basic:rw profile.full';
    const scope = ('product.compact');
    // Build authorization URL
	console.log(config)
    const url =
        // Base URL (https://api.kroger.com/v1/connect/oauth2)
        `${config.oauth2BaseUrl}/authorize?` +
        // ClientId (specified in .env file)
        `client_id=${(config.clientId)}` +
        // `client_id=${encodeURIComponent(config.clientId)}` +
        // Pre-configured redirect URL (http://localhost:3000/callback)
        // `&redirect_uri=${encodeURIComponent(config.redirectUrl)}` +
        `&redirect_uri=${(config.redirectUrl)}` +
        // Grant type
        `&response_type=code` +
        // Scope specified above
        `&scope=${scope}`;
    // Browser redirects to the OAuth2 /authorize page

	console.log(url)
	return	fetch(`${url}`).then(res => {
		console.log(res)
		console.log(res.json)
		return res;
	})
}

router.get('/',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
    res.redirect('/users/');
  });

module.exports = router;
