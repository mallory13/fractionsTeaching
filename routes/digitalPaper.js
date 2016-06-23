//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET digital pathway pages

router.get('/fracRepCompOrder', function(req, res, next) {
  res.render('digitalPaper/fracRepCompOrder', {title:"Fractions Representing Comparing Ordering"});
});

router.get('/litReviews', function(req, res, next) {
  res.render('digitalPaper/litReviews', {title:"Instructional Decisions"});
});

router.get('/studentLearn', function(req, res, next) {
  res.render('digitalPaper/studentLearn', {title:"Student Learning"});
});

router.get('/teachProLearn', function(req, res, next) {
  res.render('digitalPaper/teachProLearn', {title:"Teacher Professional Learning"});
});


module.exports = router;
