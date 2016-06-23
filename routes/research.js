//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET research pages

router.get('/digitalPaper', function(req, res, next) {
  res.render('research/digitalPaper', {title:"Digital Paper"});
});

router.get('/fracPathOverview', function(req, res, next) {
  res.render('research/fracPathOverview', {title:"Fractions Learning Pathways Overview"});
});

router.get('/fracResearchFindings', function(req, res, next) {
  res.render('research/fracResearchFindings', {title:"Fractions Research Findings"});
});

router.get('/fracResearchSum', function(req, res, next) {
  res.render('research/fracResearchSum', {title:"Fractions Research Summary"});
});

router.get('/fracTenLess', function(req, res, next) {
  res.render('research/fracTenLess', {title:"Fractions Top Ten Lessons"});
});

router.get('/payAttention', function(req, res, next) {
  res.render('research/payAttention', {title:"Paying Attention to Fractions"});
});

router.get('/payAttentionOverview', function(req, res, next) {
  res.render('research/payAttentionOverview', {title:"Paying Attention to Fractions Overview"});
});


module.exports = router;
