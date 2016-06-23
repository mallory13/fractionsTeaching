//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET tasks pathway pages

router.get('/brownie', function(req, res, next) {
  res.render('tasksPathway/brownie', {title:"Unit B Brownie Sharing"});
});

router.get('/buildingFlags', function(req, res, next) {
  res.render('tasksPathway/buildingFlags', {title:"Op B Building Flags"});
});


router.get('/buildStage', function(req, res, next) {
  res.render('tasksPathway/buildStage', {title:"Op D Building a Stage"});
});


router.get('/changeWholes', function(req, res, next) {
  res.render('tasksPathway/changeWholes', {title:"Changing Wholes"});
});


router.get('/compARecipeBLM1', function(req, res, next) {
  res.render('tasksPathway/compARecipeBLM1', {title:"Recipe Task BLM"});
});


router.get('/compARecipeBLM2', function(req, res, next) {
  res.render('tasksPathway/compARecipeBLM2', {title:"Recipe Task BLM2"});
});


router.get('/countGame', function(req, res, next) {
  res.render('tasksPathway/countGame', {title:"Unit D Counting Game"});
});

router.get('/desktopFrac', function(req, res, next) {
  res.render('tasksPathway/desktopFrac', {title:"Unit B Desktop Fractions"});
});

router.get('/iHave', function(req, res, next) {
  res.render('tasksPathway/iHave', {title:"Unit F I Have, Who Has"});
});


router.get('/op', function(req, res, next) {
  res.render('tasksPathway/op', {title:"Operations"});
});


router.get('/opBBuildFlagsBLM1', function(req, res, next) {
  res.render('tasksPathway/opBBuildFlagsBLM1', {title:"Building Flags BLM"});
});


router.get('/opBBuildFlagsBLM2', function(req, res, next) {
  res.render('tasksPathway/opBBuildFlagsBLM2', {title:"Building Flags BLM2"});
});


router.get('/opDBuildStageBLM1', function(req, res, next) {
  res.render('tasksPathway/opDBuildStageBLM1', {title:"Building a Stage BLM1"});
});


router.get('/opDBuildStageBLM2', function(req, res, next) {
  res.render('tasksPathway/opDBuildStageBLM2', {title:"Building a Stage BLM2"});
});

router.get('/opDBuildStageBLM3', function(req, res, next) {
  res.render('tasksPathway/opDBuildStageBLM3', {title:"Building a Stage BLM3"});
});


router.get('/opDRelayRaceBLM', function(req, res, next) {
  res.render('tasksPathway/opDRelayRaceBLM', {title:"Relay Race BLM"});
});

router.get('/opETurfBLM', function(req, res, next) {
  res.render('tasksPathway/opETurfBLM', {title:"Turf Touchdown BLM"});
});


router.get('/paperFold', function(req, res, next) {
  res.render('tasksPathway/paperFold', {title:"Comp E Pretty Powerful Paper Folding"});
});

router.get('/pathwayTasks', function(req, res, next) {
  res.render('tasksPathway/pathwayTasks', {title:"Fraction Pathway Tasks"});
});


router.get('/recipe', function(req, res, next) {
  res.render('tasksPathway/recipe', {title:"Comp A Recipe Task"});
});

router.get('/relayRace', function(req, res, next) {
  res.render('tasksPathway/relayRace', {title:"Op D Relay Race"});
});

router.get('/shapeSets', function(req, res, next) {
  res.render('tasksPathway/shapeSets', {title:"Unit F Fraction Shape Sets"});
});


router.get('/turfTouch', function(req, res, next) {
  res.render('tasksPathway/turfTouch', {title:"Op E Turf Touchdown"});
});

router.get('/unit', function(req, res, next) {
  res.render('tasksPathway/unit', {title:"Unit Fractions"});
});

router.get('/unitBDesktopBLM', function(req, res, next) {
  res.render('tasksPathway/unitBDesktopBLM', {title:"Desktop Fractions BLM"});
});


router.get('/unitFChangeWholesBLM', function(req, res, next) {
  res.render('tasksPathway/unitFChangeWholesBLM', {title:"Changing Wholes BLM"});
});

router.get('/walkLine', function(req, res, next) {
  res.render('tasksPathway/walkLine', {title:"Unit A Walk the Line"});
});


module.exports = router;
