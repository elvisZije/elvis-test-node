'use strict';

/* Controllers */
var myApp = angular.module('myApp.controllers', []);

myApp.controller('NavigationCtrl', ['$scope','NavigationService', function($scope, NavigationService) {
        $scope.items = NavigationService.query();
        $scope.orderProp = 'key';
    }]);

