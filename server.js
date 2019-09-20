const express = require('express');
const session = require('express-session');
const parser = require('body-parser')
const path = require('path')
//pulls in mongoose.js which connects to our database and also links all of our models
require('./server/config/mongoose.js');

const app = express();

app.use(parser.json())
    .use(parser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public/dist/public' ));

//pulls in all of our routes
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000 for the belt exam!"));
