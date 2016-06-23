//routes and controllers are the same thing
'use strict'
angular.module('core').controller('ContactFormController', ['$scope', '$mdToast', '$animate'
  function($scope, '$mdToast', '$animate'){
    //show variable from contact form view

$scope.toastPosition = {
  bottom: false,
  top: true,
  left: false,
  right: true
};
$scope.getToastPosition = function () {
  return Object.keys($scope.toastPosition)
  .filter(function (pos){
    return $scope.toastPosition[pos];
  })
  .join(' ');
};
$scope.showSimpleToast = function (){
  $mdToast.simple()
  .content('Simple Toast')
  .position($scope.getToastPosition()
.hideDelay(3000)
);
};
  }
]);


var express = require('express');
var router = express.Router();



//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back


router.get('/contact', function(req, res, next) {
  res.render('contact', {myName: "Contact", title:"Contact"});
});







module.exports = router;
