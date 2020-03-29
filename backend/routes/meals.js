const measurement = require('../utils/measurements')
const config = require('../config')
var CLIENT_ID = "munchies-9c7559789a50c8102c9dc870913c43521328125745489412562"
var CLIENT_SECRET="kAGjcYPS4wOtGg9TIabQ8nTp1d49Fw9RbTckwnaM"
var express = require('express');
var router = express.Router();
var foods = require('../utils/food');
var async  = require('express-async-await')
var fetch = require('node-fetch')
require('dotenv').config();

// Get recipes by meal
// All breakfast
// All lunch
// All dinner


/* GET home page. */
router.get('/:search', async function(req, res, next) {
	console.log(req)
	var search = req.search
	fetch(`https://api.edamam.com/search?q=${search}&app_id=3344f1e2&app_key=e947ca2f0edac72a9ea37ef3af57ea54&from=0&to=1`)
	    .then(res => {
		    return res.json()
	    })
	    .then(json => {
		    console.log(json["hits"])
		    var ingr = json["hits"][0]["recipe"]["ingredientLines"]
		    console.log(ingr)
		    var map = ingr.map(elem => {
			    return elem.split(',')[0];
		    })
		    //Go until number or measurement
		    var result = map.map(elem => {
			    elem = elem.split(' ')
			    var length = elem.length
			    var end = length;
			    var start = 0;
			    console.log(elem)
			    for(var i = length - 1; i > 0; i--){
				    console.log(elem[i])
				    if(measurement.includes(elem[i])){
					    console.log("1 true")
					    console.log(i)
					    start = i + 1;
					    console.log(start)
					    return elem.slice(start,end)
				    }
				    else if(elem[i].indexOf("/") >= 0){
					    //Found fraction?
					    console.log("found fraction true")
					    console.log(i)
					    start = i + 1;
					    console.log(start)
					    return elem.slice(start,end)
				    }
				    else if(elem[i].match(/^-{0,1}\d+$/)){
					    //valid integer (positive or negative)
					    console.log("2 true")
					    console.log(i)
					    start = i + 1;
					    console.log(start)
					    return elem.slice(start,end)
				    }else if(elem[i].match(/^\d+\.\d+$/)){
					    //valid float
					    console.log("3 true")
					    console.log(i)
					    start = i + 1;
					    console.log(start)
					    return elem.slice(start,end)
				    }
			    }
			    return elem;
		    })
		    return res.send(result)
		    return res.send(json["hits"][0]["recipe"]["ingredientLines"])
		    res.send(json["hits"])
	    });
});
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
	fetch(`https://api.edamam.com/search?q=chicken&app_id=3344f1e2&app_key=e947ca2f0edac72a9ea37ef3af57ea54&from=0&to=3&calories=591-722&health=alcohol-free`)
	    .then(res => {
		    console.log(res)
		    	
		    res.json()
	    })
	    .then(json => {
		    console.log(json["hits"])
		    res.send(json["hits"])
	    });
});

// Authorization code redirect initiated by 'login' event from Sign In button
function redirectToLogin() {
    // Must define all scopes needed for application
    //const scope = encodeURIComponent('product.personalized cart.basic:rw profile.full');
    //const scope = 'product.personalized cart.basic:rw profile.full';
    const scope = ('product.compact');
    // Build authorization URL
	console.log(config)
    const url =
        // Base URL (https://api.kroger.com/v1/connect/oauth2)
        `${config.oauth2BaseUrl}/authorize?` +
        // ClientId (specified in .env file)
        `client_id=${(config.clientId)}` +
        // `client_id=${encodeURIComponent(config.clientId)}` +
        // Pre-configured redirect URL (http://localhost:3000/callback)
        // `&redirect_uri=${encodeURIComponent(config.redirectUrl)}` +
        `&redirect_uri=${(config.redirectUrl)}` +
        // Grant type
        `&response_type=code` +
        // Scope specified above
        `&scope=${scope}`;
    // Browser redirects to the OAuth2 /authorize page

	console.log(url)
	return	fetch(`${url}`).then(res => {
		console.log(res)
		console.log(res.json)
		return res;
	})
}

router.get('/here/now', async function(req, res, next) {
	console.log("/ home")
	//console.log(req)
		
	redirectToLogin().then(response => res.render(response))
});
router.get('/no/no', async function(req, res, next) {
	console.log("Redirect success")
	console.log(req)
		
	//redirectToLogin()
});

module.exports = router;
