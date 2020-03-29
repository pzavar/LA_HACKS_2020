var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', function(req, res) {
  // show landing page
  res.render('index', { title: 'Express' });
});

// show register form
router.get("/register", (req, res) => {
  res.render('register', { title: 'Register' });
});

// show login form
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
