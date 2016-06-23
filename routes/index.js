//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

/* GET home page. */
// router is express library for handling urls
router.get('/index', function(req, res, next) {
  res.render('index', { myName: "index", title: "Home" });
});


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// main pages
router.get('/pathway', function(req, res, next) {
  res.render('pathway', {myName: "Pathway", title:"Pathway"});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {myName: "Contact", title:"Contact"});
});

router.get('/planningSupports', function(req, res, next) {
  res.render('planningSupports', {myName: "Planning Supports", title:"Planning Supports"});
});

router.get('/plfSupports', function(req, res, next) {
  res.render('plfSupports', {myName: "PLF Supports", title:"PLF Supports"});
});

router.get('/research', function(req, res, next) {
  res.render('research', {myName: "Research", title:"Research"});
});

router.get('/tasks', function(req, res, next) {
  res.render('tasks', {myName: "Tasks", title:"Tasks"});
});






// pathway files


  // comp


  // op


  // unit




// planning support files




//plf Support files



//research files

  // digital paper


  // lit reviews


  // support docs




// tasks files

  //digital paper

    // lesson bundles

    // single lessons

  // pathway

    // comp


    // op


    // unit











module.exports = router;
