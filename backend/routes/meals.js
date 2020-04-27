const measurement = require('../utils/measurements')
var express = require('express');
var router = express.Router();
var foods = require('../utils/food');
var async  = require('express-async-await')
var fetch = require('node-fetch')
var config = require('../config')
var mongoose = require('mongoose')

var Week = require('../models/weeks')
var Meal = require('../models/meals')
// Get recipes by meal
// All breakfast
// All lunch
// All dinner


///* GET home page. */
//router.get('/week', async function(req, res, next) {
//	console.log(req)
//	var searchList = ["chicken", "steak", "salad","turkey","spinach","sandwich"]
//	var searchOne = await fetch(`https://api.edamam.com/search?q=${searchList[0]}&app_id=${config.recipeId}&app_key=${config.recipeApiKey}&from=0&to=21`)
//	var json = await searchOne.json()
//	var hits = json["hits"]
//	console.log("Search hits")
//	console.log(hits)

//	var week = []
//	for(var i = 0; i < 7; i++){
//		for(var j = 0; j < 3; j++){
//			var mealType = "breakfast"
//			if(j == 1) mealType = "lunch"
//			else if(j == 2) mealType = "dinner"
//			//A little bit of a magic number but this us numbers 0 -20 inclusive
//			var meal = hits[j+(3 *i)]["recipe"]
//			console.log(meal)
//			var day = {}
//			day["label"] = meal["label"]
//			console.log(meal["label"])
//			day["image"] = meal["image"]
//			day["source"] = meal["source"]
//			day["url"] = meal["url"]
//			day["calories"] = meal["calories"]
//			console.log(meal["calories"])
//			day["yield"] = meal["yield"]
//			console.log(meal["yield"])
//			day["healthLabels"] = meal["healthLabels"]
//			console.log(meal["healthLabels"])
//			day["mealType"] = mealType
//			console.log(mealType)
//			day["recipe"] = meal["ingredientLines"]
//			week.push(day)
//		}
//	}
//	res.send(week)
//});

//id: 17281,
// title: "Spicy Tuna Tartare",
// image: "https://spoonacular.com/recipeImages/17281-312x231.jpg",
// imageType: "jpg",
// calories: 459,
// protein: "29g",
// fat: "26g",
// carbs: "33g"
//https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
// json["week"]["monday"]["meals"][0,1,2]
// json["week"]["monday"]["nutrients"]
router.get('/week', verifyToken, async function(req, res, next) {
	console.log(config.spoonacularApiKey)
	var search = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${config.spoonacularApiKey}&timeFrame=week`)
	console.log("Test")
	var json = await search.json()
	//res.send(json)
	var days = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
	var ids = []
	//Add the week to our Week Database
	//Attach the user id 
	//Attach the list of ids
	days.forEach(day => {
		for(var i = 0; i < 3; i++){
			var meal = json["week"][day]["meals"][i]
			ids.push(meal["id"])
		}
	})

	//Create a new week 
	var newWeek = Week({userId: req.token, mealIds: ids, week: json["week"]})
	newWeek.save(function (err, fluffy) {
		if (err) return console.error(err)	
		console.log("Saved week to db")
	});

	var testIds = ["655269"]
	var ingredientsBulk = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${config.spoonacularApiKey}&ids=${testIds}&includeNutrition=true`)
	var bulkJson = await ingredientsBulk.json()
	console.log("Bulk")
	//Returns list of maps
	console.log(bulkJson)
	res.send(bulkJson)
});

//Gives all relavent info
//Cost per serving
//Nutrition
//Ingredients
router.get('/groceryList',async function(req,res,next){
	var ids = "17281,175323"
	console.log(ids)

	var search = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=${config.spoonacularApiKey}&ids=${ids}&includeNutrition=true`)
	var json = await search.json()
	console.log(json)
	var result = []
	json.forEach(meal => {
		meal["extendedIngredients"].forEach(ingredient => {
			result.push(ingredient["original"])
		})
	})
	console.log(result)
	res.send(result)

	//Pseudocode for extrating recipes
	//list of meals -> meal["extendedIngredients"]
	//list of indredients -> ingredient["original"]
})

//Get Analyzed Recipe Instructions
//Can be called few times, basically just when user wants to actually create meal

router.get('/:meal', async function(req, res, next) {
	console.log(req)
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
	fetch(`https://api.edamam.com/search?q=chicken&app_id=${config.recipeId}&app_key=${config.recipeApiKey}&from=0&to=3&calories=591-722&health=alcohol-free`)
		.then(res => {
			console.log(res)

			res.json()
		})
		.then(json => {
			console.log(json["hits"])
			res.send(json["hits"])
		});
});


function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
	  console.log("BearerToken")
	  console.log(bearerToken)
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = router;
