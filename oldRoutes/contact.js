//routes and controllers are the same thing

'use strict'
// var express = require('express');
// var router = express.Router();
// var angular = require('angular');

angular.module('core',[])
.controller('ContactFormController', ['$scope', '$http','$mdToast', '$animate',
  function($scope, $http, $mdToast, $animate){
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

    this.sendMail = function (){

          data=({
          firstName : this.firstName,
          lastName : this.lastName,
          email : this.email,
          schoolBoard : this.schoolBoard,
          message : this.message
        });

        //POST request
        $http.post('/contact-form', data)
        .success(function(data, status, headers, config){
          //callback when response is available
        })
        .error(function(data, status, headers, config){
          //if error occurs or server returns response with an error status

        });

          $mdToast.simple()
          .content('Your message has been sent.')
          .position($scope.getToastPosition()
        .hideDelay(3000)
        );
        };
    }]);





//load the about view and pass variable myName with a value
//one json array to hold all the variables we want to pass back



//});

// module.exports = router;
