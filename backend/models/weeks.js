// Week Schema

var mongoose = require('mongoose');
//Define a schema
var Schema = mongoose.Schema;

var WeekSchema = new mongoose.Schema({
    userId:   String,
	mealIds: [String],
    week: 	[Schema.Types.Mixed]
    // goal:               { type: String },
    // username:           { type: String },
    // password:           { type: String }
});

module.exports = Week = mongoose.model("Week", WeekSchema);
