//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/', function(req, res, next) {
  res.render('index', { myName: "index", title: "Home" });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET pathway pages
router.get('/pathway', function(req, res, next) {
  res.render('pathway', {myName: "Pathway", title:"Pathway"});
});
