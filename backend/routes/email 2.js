var express = require('express');
var router = express.Router();
const {google} = require('googleapis');
const createMail = require('../utils/createEmail');
const path = require('path');


// Setup Email Format
const email_subject = "Welcome to Fork & Spatula's Newsletter!";
const email_body = "Thank you for signing up to Fork & Spatula's newsletter. Here we will keep you updated with news and updates on our exciting product."
const email_task = 'mail';

// Setup JWT Token
let jwtClient = new google.auth.JWT({
    keyFile: path.resolve(__dirname, 'google-key.json'),
    scopes: [        
        'https://www.googleapis.com/auth/contacts',
        'https://www.googleapis.com/auth/gmail.send',
        'profile',
    ],      
    subject: 'forkandspatula@forkandspatula.com'                    
});

// POST Waitlist Email Signup
// Body Params: 
//      email: (string)
router.post('/signup', function(req, res){
    // Authorize JWT and connect with Google
    jwtClient.authorize(function(err){
        // Throw error if authroization failed
        if (err) {
            console.log('Error: Google OAuth 2.0 JWT authorization failed. System message: ' + err);
            res.status(500).send({
                success: false,
                message: 'Error: Google OAuth 2.0 JWT authorization failed.'
            })
        } 
        // JWT is ready to use after authrization success
        else {
            console.log("Google service account successfully connected.")
            
            // Create email and send to user
            try {
                let email = new createMail(jwtClient, req.body.email, email_subject, email_body, email_task);
                email.makeBody();

                // Add contact to newsletter email conatact list
                try {
                    email.addToContacts();
                    res.send({
                        success: true,
                        message: 'Thank you for signing up!',
                    })
                } catch (error) {
                    console.log(error)
                    res.status(505).send({
                        success: false,
                        message: "Error saving new contact to contact list."
                    })
                }
            } catch (error) {
                console.log(error)
                res.status(500).send({
                    success: false,
                    message: "Errror sending email to new contact."
                })
            }
        }
    })
})

module.exports = router;