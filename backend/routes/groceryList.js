var express = require('express');
var router = express.Router();
var foods = require('../utils/food');


// Get recipes by meal
// All breakfast
// All lunch
// All dinner


/* GET home page. */
//query would be day and meal
//We would get this information from our database
//In our DB we'll store a week
router.get('/', function(req, res, next) {
	console.log(foods)
	var meal = req.query.meal
	//var day = req.query.day
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
	var recipe;
	if(index){
		recipe = day[index]["recipe"]
	}
	else{
		recipe = ""
		day.forEach(e => {
			console.log(e["recipe"]["ingr"])
			recipe += (e["recipe"]["ingr"]) 
		})
	}

	res.send(recipe)
});


module.exports = router;
