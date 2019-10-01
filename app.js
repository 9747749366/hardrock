// ******************************************
//   it  starts from here
// ******************************************

/* 
Mongoose configuration file has to be loaded before any other configuration in the server.js file
 (except the config module) because any module that is loaded after this module will be able to 
 use its models without loading it by itself.
 */
 

var config = require('./config/config');  // get the dev or test or prod env variables

var express = require('express');
var app = express(); 
var cors=require('cors');
var bodyParser   = require('body-parser');
var compression = require('compression');
var index = require('./routes/index');
var favicon = require('serve-favicon');
var path = require('path')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 


app.use(compression());

app.use(cors({credentials: true, origin: true}));


app.use(favicon(path.join(__dirname,'app','assets','img','icon.png')));

app.use(express.static(__dirname + "/app"));






app.set('view engine', 'jade');

app.use('/', index);












app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500).send(err);
});

app.listen(config.port);

module.exports = app; // make the app avail whereever needed.

//RS - 11/26/15
console.log('Server Application Running : ' + 'localhost')
console.log('Application Instance : ' + 'localhost'  + ' server running at http://localhost:' + config.port);
