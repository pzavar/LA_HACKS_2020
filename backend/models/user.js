// User Schema

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
    firstname:          { type: String },
    lastname:           { type: String }
	meals:              [ { type: mongoose.Schema.Types.ObjectId, ref : 'recipeSchema' } ]
    // dietaryrestriction: { type: String },
    // goal:               { type: String },
    // username:           { type: String },
    // password:           { type: String }
});

UserSchema.plugin(passportLocalMongoose)

module.exports = User = mongoose.model("User", UserSchema);
