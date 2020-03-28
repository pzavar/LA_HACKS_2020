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

router.get('/',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    //res.redirect('/users/' + req.user.username);
    res.redirect('/users/');
  });

  
// REGISTRATION LOGIC
router.post('/register', (req, res) => {
  var newUser = new User({ username: req.body.username });
  //register() is provided by LocalStrategy
  //password stored as hash
  User.register(newUser, req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      //return ensures we get out of this function body safely
      return res.render("register");
    }
    //successful signup
    //logs in and redirects to main page
    passport.authenticate("local")(req, res, () => {
      res.redirect("/main");
    });
  });
});

// handling login route
router.post("/login", passport.authenticate("local",
  {
    //middleware
    successRedirect: "/users/" + req.user.username,
    failureRedirect: "/login"
  }), (req, res)=> {
    //nothing
  });


  // logout logic
router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/main");
});

// isLoggedIn middleware
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect = router;
}

module.exports = router;