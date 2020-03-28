const nextJS = require('next');
const express = require('express');

// authentication and authorization
const passport = require('passport');
const session  = require('express-session');

// import divided backend


const dev = process.env.NODE_ENV !== "production";
const nextApp = nextJS({ dev });
const nextRequestHandler = nextApp.getRequestHandler();

nextApp
    .prepare()
    .then(() => {
        const server = express();

        //Middleware
        server.use(express.urlencoded({ extended: false }));
        server.use(
            session({
                secret: "Needs a Long and Random string",
                resave: false,
                saveUninitialized: false
            })
        );
        server.use(passport.initialize());
        server.use(passport.session());

        //our own routes and middelware
        setAuthentication(server, nextApp);
        //setUpDatabase();

        server.all("*", nextRequestHandler);

        //Starting server
        server.listen(httpsPost, err => {
            if (err) throw err;
            console.log("The Munchies server has started on port ", httpsPort);
        });
    })
    .catch(ex => {
        console.log(ex.stack);
        closeDatabase();
        process.exit(1);
    })