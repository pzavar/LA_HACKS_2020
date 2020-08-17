// const express = require('express');
// const mongoose = require('mongoose');
// const User = require('../models/user');
// const route = express.Router();

// route.post('/', async (req, res) => {
//     const {
//         firstname,
//         lastname,
//         email,
//         username,
//         dietaryrestriction,
//         goal
//     } = req.body;

<<<<<<< HEAD
//     // Create a new user
//     let user = {};
//     user.firstname = firstname;
//     user.lastname = lastname;
//     // user.email = email;
//     // user.password = password;
//     // user.username = username;
//     // user.dietaryrestriction = dietaryrestriction;
//     // user.goal = goal;
=======
    // Create a new user
    let user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;
    user.username = username;
    user.dietaryrestriction = dietaryrestriction;
    user.goal = goal;
>>>>>>> testBranch

//     let userModel = new User(user);
//     await userModel.save();
//     res.json(userModel);
// });

// module.exports = route;
