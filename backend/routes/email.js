var express = require('express');
var router = express.Router();


// POST Email Waitlist Sign Up
router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;