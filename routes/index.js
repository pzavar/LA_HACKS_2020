var express = require('express');
var router = express.Router();
var passport = require('passport');
var CLIENT_ID = "munchies-9c7559789a50c8102c9dc870913c43521328125745489412562"
var CLIENT_SECRET="kAGjcYPS4wOtGg9TIabQ8nTp1d49Fw9RbTckwnaM"

// GET Google Authentication API 
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get('/here', async function(req, res, next) {
	console.log("/ home")
		
	fetch(`https://api.kroger.com/v1/connect/oauth2/authorize?scope=coupon.basic&response_type=code&client_id=${CLIENT_ID}&redirect_uri=https://me.mydomain:3000/`)
	    .then(res => res.json())
	    .then(json => {
		    console.log(json["hits"])
		    res.send(json["hits"])
	    });
});

router.get(
	"/auth/google/redirect",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	(req, res) => {
		var token = req.user.token;
		res.redirect("http://localhost:3000?token=" + token);
	}
);

module.exports = router;
