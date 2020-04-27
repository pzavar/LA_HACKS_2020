// Meal Schema

var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var MealSchema = new mongoose.Schema({
    ingredients:           [String],
    cost:              { type: String },
    instructions: [String],
	meal: Schema.Types.Mixed
    // goal:               { type: String },
    // username:           { type: String },
    // password:           { type: String }
});

module.exports = Meal = mongoose.model("Meal", MealSchema);
