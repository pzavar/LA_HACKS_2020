var express = require('express');
var router = express.Router();
var foods = require('../utils/food');
var async  = require('express-async-await')
var fetch = require('node-fetch')
require('dotenv').config();

// Get recipes by meal
// All breakfast
// All lunch
// All dinner


/* GET home page. */
router.get('/:meal', async function(req, res, next) {
	console.log(foods)
	var meal = req.meal
	var day = foods["day"]
	
	var index = 0
	switch(meal){
		case "breakfast":
			index = 0
			break;
		case "lunch":
			index = 1
			break;
		case "dinner":
			index = 2
			break;
	}
	var recipe = day[index]["recipe"]
	fetch(`https://api.edamam.com/search?q=chicken&app_id=3344f1e2&app_key=e947ca2f0edac72a9ea37ef3af57ea54&from=0&to=3&calories=591-722&health=alcohol-free`)
	    .then(res => res.json())
	    .then(json => {
		    console.log(json["hits"])
		    res.send(json["hits"])
	    });
});


module.exports = router;
