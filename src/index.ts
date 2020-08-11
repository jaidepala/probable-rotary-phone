import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Controllers
// import { productRoutes } from './controllers/products/product.controller';
import router from './controllers/controllers';

// Config
// import { rootHandler, helloHandler } from './handlers';
const config = require('./config');

const app = express();
const { endpoint, port } = config;

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
mongoose.connect(endpoint, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(router);
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join('../' + __dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
});