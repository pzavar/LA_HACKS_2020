require('dotenv').config()

// Parameters imported from .env file (environment variables)
var config = {}
config.apiBaseUrl = process.env.API_BASE_URL;
config.oauth2BaseUrl = process.env.OAUTH2_BASE_URL;
config.clientId = process.env.CLIENT_ID;
config.redirectUrl = process.env.REDIRECT_URL;
config.clientSecret = process.env.CLIENT_SECRET

config.recipeId = process.env.EDAMAM_RECIPE_ID_KEY
config.recipeApiKey = process.env.EDAMAM_RECIPE_API_KEY 
config.nutritionId = process.env.EDAMAM_NUTRITION_ID_KEY
config.nutritionApiKey = process.env.EDAMAM_NUTRITION_API_KEY
config.spoonacularApiKey = process.env.SPOONACULAR_API_KEY

config.googleClientId = process.env.GOOGLE_CLIENT_ID
config.googleClientSecret = process.env.GOOGLE_CLIENT_SECRET

config.JWTSecret = process.env.JWTSecret

config.newsletterGmailAcc = process.env.NEWSLETTER_GMAIL_ACC
config.newsletterGmailKey = process.env.NEWSLETTER_GMAIL_PW

module.exports = config;
