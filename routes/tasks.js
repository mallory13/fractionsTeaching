//routes and controllers are the same thing

var express = require('express');
var router = express.Router();


//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back

// GET tasks digital paper pages

router.get('/compOrder', function(req, res, next) {
  res.render('compOrder', {title:"Comparing and Ordering Fractions (Gr 6)"});
});

router.get('/digitalTasks', function(req, res, next) {
  res.render('digitalTasks', {title:"Digital Paper Tasks"});
});

router.get('/equivFrac', function(req, res, next) {
  res.render('equivFrac', {title:"Equivalence of Fractions (Jr - Int)"});
});

router.get('/fracRep', function(req, res, next) {
  res.render('fracRep', {title:"Fractions Representation (Jr-Int)"});
});

router.get('/impSetRep', function(req, res, next) {
  res.render('impSetRep', {title:"Improper Fractions with Set Representations (Gr 6)"});
});


router.get('/orderNumLine', function(req, res, next) {
  res.render('orderNumLine', {title:"Ordering on a Number Line (Gr 7)"});
});

router.get('/rep', function(req, res, next) {
  res.render('rep', {title:"Representations (Jr)"});
});

router.get('/setAreaMod', function(req, res, next) {
  res.render('setAreaMod', {title:"Fractions Representations with Set Area Models (Gr 6)"});
});

router.get('/setRep', function(req, res, next) {
  res.render('setRep', {title:"Set Representations (Jr)"});
});



// GET tasks pathway pages

router.get('/brownie', function(req, res, next) {
  res.render('brownie', {title:"Unit B Brownie Sharing"});
});

router.get('/buildingFlags', function(req, res, next) {
  res.render('buildingFlags', {title:"Op B Building Flags"});
});


router.get('/buildStage', function(req, res, next) {
  res.render('buildStage', {title:"Op D Building a Stage"});
});


router.get('/changeWholes', function(req, res, next) {
  res.render('changeWholes', {title:"Changing Wholes"});
});


router.get('/compARecipeBLM1', function(req, res, next) {
  res.render('compARecipeBLM1', {title:"Recipe Task BLM"});
});


router.get('/compARecipeBLM2', function(req, res, next) {
  res.render('compARecipeBLM2', {title:"Recipe Task BLM2"});
});


router.get('/countGame', function(req, res, next) {
  res.render('countGame', {title:"Unit D Counting Game"});
});

router.get('/desktopFrac', function(req, res, next) {
  res.render('desktopFrac', {title:"Unit B Desktop Fractions"});
});

router.get('/iHave', function(req, res, next) {
  res.render('iHave', {title:"Unit F I Have, Who Has"});
});


router.get('/op', function(req, res, next) {
  res.render('op', {title:"Operations"});
});


router.get('/opBBuildFlagsBLM1', function(req, res, next) {
  res.render('opBBuildFlagsBLM1', {title:"Building Flags BLM"});
});


router.get('/opBBuildFlagsBLM2', function(req, res, next) {
  res.render('opBBuildFlagsBLM2', {title:"Building Flags BLM2"});
});


router.get('/opDBuildStageBLM1', function(req, res, next) {
  res.render('opDBuildStageBLM1', {title:"Building a Stage BLM1"});
});


router.get('/opDBuildStageBLM2', function(req, res, next) {
  res.render('opDBuildStageBLM2', {title:"Building a Stage BLM2"});
});

router.get('/opDBuildStageBLM3', function(req, res, next) {
  res.render('opDBuildStageBLM3', {title:"Building a Stage BLM3"});
});


router.get('/opDRelayRaceBLM', function(req, res, next) {
  res.render('opDRelayRaceBLM', {title:"Relay Race BLM"});
});

router.get('/opETurfBLM', function(req, res, next) {
  res.render('opETurfBLM', {title:"Turf Touchdown BLM"});
});


router.get('/paperFold', function(req, res, next) {
  res.render('paperFold', {title:"Comp E Pretty Powerful Paper Folding"});
});

router.get('/pathwayTasks', function(req, res, next) {
  res.render('pathwayTasks', {title:"Fraction Pathway Tasks"});
});


router.get('/recipe', function(req, res, next) {
  res.render('recipe', {title:"Comp A Recipe Task"});
});

router.get('/relayRace', function(req, res, next) {
  res.render('relayRace', {title:"Op D Relay Race"});
});

router.get('/shapeSets', function(req, res, next) {
  res.render('shapeSets', {title:"Unit F Fraction Shape Sets"});
});


router.get('/turfTouch', function(req, res, next) {
  res.render('turfTouch', {title:"Op E Turf Touchdown"});
});

router.get('/unit', function(req, res, next) {
  res.render('unit', {title:"Unit Fractions"});
});

router.get('/unitBDesktopBLM', function(req, res, next) {
  res.render('unitBDesktopBLM', {title:"Desktop Fractions BLM"});
});


router.get('/unitFChangeWholesBLM', function(req, res, next) {
  res.render('unitFChangeWholesBLM', {title:"Changing Wholes BLM"});
});

router.get('/walkLine', function(req, res, next) {
  res.render('walkLine', {title:"Unit A Walk the Line"});
});


module.exports = router;
