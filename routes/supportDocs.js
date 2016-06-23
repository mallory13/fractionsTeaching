//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET support docs pages

router.get('/actFracUnd', function(req, res, next) {
  res.render('supportDocs/actFracUnd', {title:"Actions to Develop Fractions Understanding"});
});

router.get('/buildAddSub', function(req, res, next) {
  res.render('supportDocs/buildAddSub', {title:"Building to Addition and Subtraction of Fractions"});
});

router.get('/buildEquiv', function(req, res, next) {
  res.render('supportDocs/buildEquiv', {title:"Building Understanding of Equivalence"});
});

router.get('/buildUnitFrac', function(req, res, next) {
  res.render('supportDocs/buildUnitFrac', {title:"Building Understanding of Unit Fractions"});
});

router.get('/devFracNumSense', function(req, res, next) {
  res.render('supportDocs/devFracNumSense', {title:"Developing Fraction Number Sense"});
});

router.get('/devPartItDisembed', function(req, res, next) {
  res.render('supportDocs/devPartItDisembed', {title:"Developing Fraction Number Sense"});
});

router.get('/fracAcrossStrands', function(req, res, next) {
  res.render('supportDocs/fracAcrossStrands', {title:"Fractions Across Strands and Grades: Sample Tasks"});
});

router.get('/purpRep', function(req, res, next) {
  res.render('supportDocs/purpRep', {title:"Purposeful Representations"});
});

router.get('/respThink', function(req, res, next) {
  res.render('supportDocs/respThink', {title:"Being Responsive to Student Thinking"});
});

router.get('/supportDocs', function(req, res, next) {
  res.render('supportDocs/supportDocs', {title:"Support Documents"});
});

router.get('/tasksThinking', function(req, res, next) {
  res.render('supportDocs/tasksThinking', {title:"Intentional Tasks to Develop Fractions Thinking"});
});

router.get('/waysWeUseFrac', function(req, res, next) {
  res.render('supportDocs/waysWeUseFrac', {title:"Ways We Use Fractions"});
});


module.exports = router;
