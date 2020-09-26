const measurement = require('../utils/measurements')
var express = require('express');
var router = express.Router();
var foods = require('../utils/food');
var async  = require('express-async-await')
var fetch = require('node-fetch')
var config = require('../config')

var Week = require('../models/weeks')
var Meal = require('../models/meals')

// Also, looking at the Spoonacular API, the Search by Complex might be the approach. The logic flow would be setting query to breakfast, lunch, and dinner. Setting the type to breakfast, lunch and dinner. Setting other preferences according to the user. Then we do 5 searches on each breakfast, lunch and dinner, then from those 15, pick out the meal combination that meets the budget crietria. and and set addRecipeInformation boolean to true.


function nutrientToIndex(nutrient){
  nutrientToIndexMap = {
    "Calories": 0,
    "Fat": 1,
    "Saturated Fat": 2,
    "Carbohydrates": 3,
    "Net Carbohydrates": 4,
    "Sugar": 5,
    "Cholesterol": 6,
    "Sodium": 7,
    "Protein": 8,
    "Vitamin K": 9,
    "Vitamin A": 10,
    "Vitamin C": 11,
    "Copper": 12,
    "Manganese": 13,
    "Magnesium": 14,
    "Phosphorus": 15,
    "Potassium": 16,
    "Vitamin B6": 17,
    "Calcium": 18,
    "Iron": 19,
    "Folate": 20,
    "Vitamin B1": 21,
    "Vitamin B2": 22,
    "Zinc": 23,
    "Vitamin E": 24,
    "Fiber": 25,
    "Vitamin B3": 26,
    "Selenium": 27,
    "Vitamin B5" : 28
  }
  return nutrientToIndexMap[nutrient]
}

function extractIngredients(recipe){
  nutrients = recipe["nutrition"]["ingredients"]
  console.log("extractIngredients")
  console.log(recipe)
  console.log(nutrients)
  return nutrients.map(ingredient => {
    name = ingredient["name"]
    number = ingredient["amount"]
    unit = ingredient["unit"]
    console.log("Number + Unit")
    console.log(number.toString())
    console.log(unit)
    return number.toString() + " " + unit + " " + name
  })
}
/*
 Calories Fat Cholestral Sodium Sugar Protein Carbs: 150g
  Carbs: 78.9% Protein: 7.9% Fat: 13.2%
  */
function extractMacro(recipe){
  result = {}
  result["percentages"] = recipe["caloricBreakdown"] 
  result["totals"] = {}
  info = [ "Calories", "Fat", "Cholesterol", "Sodium", "Sugar", "Protein", "Carbohydrates"]
  nutrients = recipe["nutrition"]["nutrients"]
  return info.map(nutrient => {
    index = nutrientToIndex(nutrient)
    console.log(index)
    title = nutrients[index]["title"]
    number = nutrients[index]["amount"]
    unit = nutrients[index]["unit"]
    console.log("Number + Unit")
    console.log(number.toString())
    console.log(unit)
    return title + ": " + number.toString() + unit 
  })
}

// 364.8 means 3 dollars and 64 cents
function getCost(recipe){
  console.log(recipe["pricePerServing"] / 100)
  return recipe["pricePerServing"] / 100
}

function buildComplexCall(numberOfResults,type,diet,excludeIngredients) {
  var baseUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${config.spoonacularApiKey}`
  var url = baseUrl + `&type=${type}&number=${numberOfResults}&addRecipeNutrition=true`
  if (diet != ""){
    url += `&diet=${diet}`
  }
  if (excludeIngredients != null && excludeIngredients.length != 0){
    for (var i = 0; i < excludeIngredients.length; i++){
      var item = excludeIngredients[i] 
      if (i == 0){
        url += `&exludeIngredients=${item}`
      }
      else{
        url += `, ${item}`
      }
    }
  }
  console.log("Calling complex call with url")
  console.log(url)
  return url
}

async function fetchMealType(numberOfResults,numberOfMeals,limit,mealType,diet,excludeIngredients,res){
  set = []
  call = buildComplexCall(numberOfResults,mealType,diet,excludeIngredients)
  var search = await fetch(call)
  json = await search.json()
  results = json["results"]
  console.log('Results')
  console.log(results)
  set = results.filter(recipe => (getCost(recipe) < limit)).slice(0,numberOfMeals)
  console.log("set is ")
  console.log(set)
  console.log(set.length)
  console.log(numberOfMeals)

  if (set.length != numberOfMeals) {
    res.sendStatus(500);
  }

  return set
}



/*
 * Goal:
 * Return 3 meals based off their budget
 * Search by complex for each type of meal. (Breakfast, Lunch, Dinner)
 *    Returns n number of meals controlled by the number parameter
 * Optimize for goal cost (c = cost, C = goal cost, plusOrMinus):
 * We have 3 lists. One for each type of meal
 * From each list select an item that satisfies being around the goal cost with a 
 *    flexibility of plus or minus
 *
 * searchByComplex
 * Returns map 
 * {
 *    results: [{...},{...}]     // all info in here
 * }
 */

/*
 * Expected body 
 * costPerMeal = double
 * diet  = string
 * excludeIngredients = list
 * numberOfMeals = int for number of meals to return for each catagory
 */
router.get('/complex',async function(req,res,next){
  console.log('complex endpoint called')
  console.log(req.query)
  const {
    costPerMeal = 200,
    diet = "",
    excludeIngredients = [],
    breakfast = true, lunch = true, dinner = true, 
    snacks = 0,
    numberOfMeals = 1
  } = req.query

  var numberOfResults = numberOfMeals * 2
  var flexibility = 1

  // Use for testing
  var limit = costPerMeal + flexibility

  results = []
  breakfastSet = []
  lunchSet = []
  dinnerSet = []
  snackSet = []
  if (breakfast){
    breakfastSet = fetchMealType(numberOfResults,numberOfMeals,limit,"breakfast",diet,excludeIngredients,res)
  }
  if (lunch) {
    lunchSet = fetchMealType(numberOfResults,numberOfMeals,limit,"main course",diet,excludeIngredients,res)
  }
  if (dinner) {
    dinnerSet = fetchMealType(numberOfResults,numberOfMeals,limit,"main course",diet,excludeIngredients,res)
  }
  if (snacks != 0) {
    snackSet = fetchMealType(numberOfResults * snacks,numberOfMeals,limit,"snack",diet,excludeIngredients,res)
  }

  console.log("Breakfast set is here:")

  console.log(breakfastSet)
  console.log(lunchSet)
  console.log(dinnerSet)
  console.log(snackSet)

  /*
   *breakfast: {
        The list of recipes
        breakfastSet: [
        {...}
        ],
        macros: [
        [...]
        ],
        ingredients: [
        [...]
]
   * */

  result = {}
  map = ["breakfast", "lunch", "dinner", "snack"]
  Promise.all([breakfastSet,lunchSet,dinnerSet,snackSet]).then((sets) => {
    breakfastSet = sets[0]
    lunchSet = sets[1]
    dinnerSet = sets[2]
    snackSet = sets[3]
    res.json({
      "breakfast" : { 
        "recipes": breakfastSet,
        "macros" : breakfastSet.map(recipe => extractMacro(recipe)),
        "ingredients" : breakfastSet.map(recipe => extractIngredients(recipe))
      },
      "lunch" : {
        "recipes": lunchSet,
        "macros" : lunchSet.map(recipe => extractMacro(recipe)),
        "ingredients" : lunchSet.map(recipe => extractIngredients(recipe))
      },
      "dinner" : {
        "recipes": dinnerSet,
        "macros" : dinnerSet.map(recipe => extractMacro(recipe)),
        "ingredients" : dinnerSet.map(recipe => extractIngredients(recipe))
      },

      "snack" : {
        "recipes": snackSet,
        "macros" : snackSet.map(recipe => extractMacro(recipe)),
        "ingredients" : snackSet.map(recipe => extractIngredients(recipe))
      }
    })

  })
})

//
//Gives all relavent info
//Cost per serving
//Nutrition
//Ingredients
router.get('/groceryList',async function(req,res,next){
  var ids = "17281"
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

module.exports = router;
