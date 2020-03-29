require('dotenv').config()
// Parameters imported from .env file (environment variables)
var config = {}
config.apiBaseUrl = process.env.API_BASE_URL;
config.oauth2BaseUrl = process.env.OAUTH2_BASE_URL;
config.clientId = process.env.CLIENT_ID;
config.redirectUrl = process.env.REDIRECT_URL;
config.clientSecret = process.env.CLIENT_SECRET
module.exports = config;
