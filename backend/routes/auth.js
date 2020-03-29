var fetch = require('node-fetch')
const { base64encode, base64decode } = require('nodejs-base64');
var express = require('express');
const request = require('request')
const config = require('../config')
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
});

// ========================
//    REGISTRATION LOGIC
// ========================
router.post("/register", (req, res) => {
  var newUser = new User({username: req.body.username});
  User.register(new User(newUser), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
			res.redirect("/campgrounds");
		});
  });
});

// LOGIN LOGIC
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", passport.authenticate("local", 
	{
		//middelware
		successRedirect: "/main", 
		failureRedirect: "/login"
	}), function (req, res) {
	//nothing
});

// LOG OUT LOGIC
router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("/main");
});

//isLoggedIn middleware
function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/login');
}

function callback(error, response, body) {
	// console.log(error)
	// console.log(response)
	// console.log(body)
	console.log(response)
		
	console.log(response.statusCode)
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}


router.get('/isLoggedIn',
  async function(req, res) {
    //Check databse if user is still logged in
	  //Else request token and save it
console.log("isLoggedIn")	 

	   const encoded = Buffer.from(`${config.clientId}:${config.clientSecret}`, `ascii`);
  // ClientId and clientSecret must be encoded
  const authorization = "Basic " + encoded.toString("base64");
  // Base URL (https://api.kroger.com/v1/connect/oauth2)
  // Version/Endpoint (/v1/token)
  const tokenUrl = 'https://api.kroger.com/v1/connect/oauth2/token';

	  console.log(tokenUrl)
	  console.log(authorization)
	  		
	  // token request
  let tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "User-Agent": "",
      Authorization: authorization,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: 'grant_type=client_credentials&scope=product.compact'
  });
	  console.log(tokenResponse)
	  var json = await tokenResponse.json()
	  console.log(json)

	  return json
	  	
	  	
  });



module.exports = router;


// // Authorization code redirect initiated by 'login' event from Sign In button
// function redirectToLogin() {
//     // Must define all scopes needed for application
//     //const scope = encodeURIComponent('product.personalized cart.basic:rw profile.full');
//     //const scope = 'product.personalized cart.basic:rw profile.full';
//     const scope = ('product.compact');
//     // Build authorization URL
// 	console.log(config)
//     const url =
//         // Base URL (https://api.kroger.com/v1/connect/oauth2)
//         `${config.oauth2BaseUrl}/authorize?` +
//         // ClientId (specified in .env file)
//         `client_id=${(config.clientId)}` +
//         // `client_id=${encodeURIComponent(config.clientId)}` +
//         // Pre-configured redirect URL (http://localhost:3000/callback)
//         // `&redirect_uri=${encodeURIComponent(config.redirectUrl)}` +
//         `&redirect_uri=${(config.redirectUrl)}` +
//         // Grant type
//         `&response_type=code` +
//         // Scope specified above
//         `&scope=${scope}`;
//     // Browser redirects to the OAuth2 /authorize page

// 	console.log(url)
// 	return	fetch(`${url}`).then(res => {
// 		console.log(res)
// 		console.log(res.json)
// 		return res;
// 	})
// }

// router.get('/',
//   passport.authenticate('local'),
//   function(req, res) {
//     // If this function gets called, authentication was successful.
//     // `req.user` contains the authenticated user.
//     //res.redirect('/users/' + req.user.username);
//     res.redirect('/users/');
//   });

// module.exports = router;
