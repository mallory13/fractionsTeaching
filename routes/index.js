//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back
router.get('/awards', function(req, res, next) {
  res.render('awards', {myName: "Awards", title:"Awards"});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {myName: "Contact", title:"Contact"});
});

router.get('/education', function(req, res, next) {
  res.render('education', {myName: "Education", title:"Education"});
});

router.get('/goals', function(req, res, next) {
  res.render('goals', {myName: "Goals", title:"Goals"});
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {myName: "Projects", title:"Projects"});
});

router.get('/skills', function(req, res, next) {
  res.render('skills', {myName: "Skills", title:"Skills"});
});

router.get('/volunteer', function(req, res, next) {
  res.render('volunteer', {myName: "Volunteer", title:"Volunteer"});
});

router.get('/branding', function(req, res, next) {
  res.render('branding', {myName: "Branding", title:"Branding"});
});

router.get('/styleGuide', function(req, res, next) {
  res.render('styleGuide', {myName: "StyleGuide", title:"StyleGuide"});
});









module.exports = router;
