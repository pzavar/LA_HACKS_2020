var express = require('express');
var router = express.Router();
var passport = require('passport');

// GET Google Authentication API 
router.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/auth/google/redirect",
	passport.authenticate("google", { failureRedirect: "/", session: false }),
	(req, res) => {
		var token = req.user.token;
		res.redirect("http://localhost:3000?token=" + token);
	}
);

module.exports = router;