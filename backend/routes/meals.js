var express = require('express');
var router = express.Router();
var foods = require('../utils/food');


// Get recipes by meal
// All breakfast
// All lunch
// All dinner


/* GET home page. */
router.get('/:meal', function(req, res, next) {
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

	res.send(recipe)
});


module.exports = router;
