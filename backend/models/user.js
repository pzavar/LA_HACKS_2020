// User Schema

var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var bcrypt = require('bcrypt')
const saltRounds = 10;

var UserSchema = new mongoose.Schema({
<<<<<<< HEAD
	userid: {type: String, unique: true},
	isLoggedIn: {type: Boolean},
	email: {type:String, unique: true},
	password: {type:String},
	budget: {type:String},
	diet: {type:String},
	exclude: {type:Array},
	targetCalories: {type:String},
	employment: {type:String},
	age: {type:String},
	meals: [ { type: mongoose.Schema.Types.ObjectId, ref : 'recipeSchema' } ]
	// isNewUser: {type: Boolean},
	// dietaryrestriction: { type: String },
	// goal:               { type: String },
	// username:           { type: String },
	// password:           { type: String }
	// accessToken: {type: String},
	// refreshToken: {type: String},
});

UserSchema.static('register', function(user) {
    return this.find({ breed });
=======
    firstname:          { type: String },
    lastname:           { type: String },
    email:              { type: String },
    dietaryrestriction: { type: String },
    goal:               { type: String },
    username:           { type: String },
    password:           { type: String }
>>>>>>> testBranch
});

UserSchema.plugin(passportLocalMongoose)


UserSchema.pre('save', function(next) {
	var user = this;

	this.hashPassword(user.password, function(err, hash) {
		if (err) return next(err);
		
		user.password = hash;
		next();
	})
})

UserSchema.methods.hashPassword = function(password, cb) {
	bcrypt.hash(password, saltRounds, function(err, hash) {
		if (err) return cb(err)
		cb(null, hash);
	})
}

UserSchema.methods.comparePassword = function(password, hash, cb) {
	bcrypt.compare(password, hash, function(error, isMatch) {
		if (error) return cb(error)
		cb(null, isMatch)
	})
}


module.exports = User = mongoose.model("User", UserSchema);
