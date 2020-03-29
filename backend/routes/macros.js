var express = require('express');
const data = require('../recipe-analysis.json')
var router = express.Router();
var foods = require('../utils/food');
var async  = require('express-async-await')
var fetch = require('node-fetch')
const config = require('../config')
var request = require('request')
// Get recipes by meal
// All breakfast
// All lunch
// All dinner


/* GET home page. */
router.post('/', async function(req, res, next) {
	console.log(req)
	console.log(req.body)
	console.log("Here is a new post")
		
	var info = req.body
	//var request = await fetch(`https://api.edamam.com/api/nutrition-details?app_id=${config.nutritionId}&app_key=${config.nutritionApiKey}`)
	var myJSONObject = {
		// title: title,
		// ingr : ingredients,
		// yield: yld
	};
request({
    url: `https://api.edamam.com/api/nutrition-details?app_id=${config.nutritionId}&app_key=${config.nutritionApiKey}`,
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
	res.send(response)
});
});

	
module.exports = router;
