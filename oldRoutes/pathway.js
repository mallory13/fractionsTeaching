//routes and controllers are the same thing

var express = require('express');
var router = express.Router();

//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET pathway pages
// comp pages
router.get('/comp', function(req, res, next) {
  res.render('pathway/comp', {myName: "Comparing Fractions", title:"Comparing Fractions"});
});

router.get('/compA', function(req, res, next) {
  res.render('pathway/compA', {myName: "Comp A", title:"Comp A"});
});


router.get('/compB', function(req, res, next) {
  res.render('pathway/compB', {myName: "Comp B", title:"Comp B"});
});

router.get('/compC', function(req, res, next) {
  res.render('pathway/compC', {myName: "Comp C", title:"Comp C"});
});

router.get('/compD', function(req, res, next) {
  res.render('pathway/compD', {myName: "Comp D", title:"Comp D"});
});

router.get('/compE', function(req, res, next) {
  res.render('pathway/compE', {myName: "Comp E", title:"Comp E"});
});


// get op pages
router.get('/op', function(req, res, next) {
  res.render('pathway/op', {myName: "Operations", title:"Operations"});
});

router.get('/opA', function(req, res, next) {
  res.render('pathway/opA', {myName: "Op A", title:"Op A"});
});

router.get('/opB', function(req, res, next) {
  res.render('pathway/opB', {myName: "Op B", title:"Op B"});
});

router.get('/opC', function(req, res, next) {
  res.render('pathway/opC', {myName: "Op C", title:"Op C"});
});

router.get('/opD', function(req, res, next) {
  res.render('pathway/opD', {myName: "Op D", title:"Op D"});
});

router.get('/opE', function(req, res, next) {
  res.render('pathway/opE', {myName: "Op E", title:"Op E"});
});

// get unit pages
router.get('/unit', function(req, res, next) {
  res.render('pathway/unit', {myName: "Unit Fractions", title:"Unit Fractions"});
});

router.get('/unitA', function(req, res, next) {
  console.log('123');
  res.render('unitA', {myName: "Unit A", title:"Unit A"});
});

router.get('/unitB', function(req, res, next) {
  res.render('unitB', {myName: "Unit B", title:"Unit B"});
});

router.get('/unitC', function(req, res, next) {
  res.render('pathway/unitC', {myName: "Unit C", title:"Unit C"});
});

router.get('/unitD', function(req, res, next) {
  res.render('pathway/unitD', {myName: "Unit D", title:"Unit D"});
});

router.get('/unitE', function(req, res, next) {
  res.render('pathway/unitE', {myName: "Unit E", title:"Unit E"});
});

router.get('/unitF', function(req, res, next) {
  res.render('pathway/unitF', {myName: "Unit F", title:"Unit F"});
});


module.exports = router;
