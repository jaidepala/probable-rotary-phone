/*
               ______________________________________
      ________|                                      |_______
      \       |        Reference Links               |      /
       \      |                                      |     /
       /      |______________________________________|     \
      /__________)                                (_________\
    *   
    *   Links
    *   
    *   Session Management:
    *   https://medium.com/@evangow/server-authentication-basics-express-sessions-passport-and-curl-359b7456003d
    *   https://codeforgeek.com/manage-session-using-node-js-express-4/ 
    *   
    *   
    *   Reason for using useCreateIndex in mongoose.connect()
    *   https://github.com/Automattic/mongoose/issues/6890
    *   
    *   
    *   
    *   
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { endpoint, masterKey, port } = require('./config');
const app = express();
const router = express.Router();

/*
    !   REF
    *
    *   (optional) only made for logging and
    *    bodyParser, parses the request body to be a readable json format
    *    app.use(logger("dev"));
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* 
    !   REF
    *   
    *   connects our back end code with the database
    *   Reason for using useCreateIndex
    *   https://github.com/Automattic/mongoose/issues/6890
*/
// mongoose.connect(endpoint, {
//     useCreateIndex: true,
//     useNewUrlParser: true
// });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Controllers
// const wiki = require('./server/controllers/user');
// const login = require('./server/controllers/login.controller');

// app.use('/api/user', wiki);
// app.use('/api/login', login);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// app.get('/', (req, res) => {
//     console.log('\nInside the homepage callback function')
//     console.log(req.sessionID)
//     res.send(`You hit home page!\n`)
// })

app.listen(port, function() {

    console.log(`Listening on ${port}`);
});
