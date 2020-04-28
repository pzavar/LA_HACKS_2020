// User Schema

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
	userid: {type: String, unique: true},
	isNewUser: {type: Boolean},
	email: {type:String, unique: true},
	password: {type:String},
	budget: {type:String},
	diet: {type:String},
	exclude: {type:Array},
	targetCalories: {type:String},
	meals: [ { type: mongoose.Schema.Types.ObjectId, ref : 'recipeSchema' } ]
	// dietaryrestriction: { type: String },
	// goal:               { type: String },
	// username:           { type: String },
	// password:           { type: String }
	// accessToken: {type: String},
	// refreshToken: {type: String},
});

UserSchema.plugin(passportLocalMongoose)


module.exports = User = mongoose.model("User", UserSchema);
