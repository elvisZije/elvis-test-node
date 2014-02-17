'use strict';

/* Controllers */
var myApp = angular.module('myApp.controllers', []);

myApp.controller('NavigationCtrl', ['$scope', function($scope) {
        $scope.items = [{
                            "srcValue": "/home",
                            "valueEn": "Home",
                            "valueSk": "Domov",
                            "valueDe": ""
                        },
                        {
                            "srcValue": "/gallery",
                            "valueEn": "Gallery",
                            "valueSk": "Galéria",
                            "valueDe": ""
                        },
                        {
                            "srcValue": "/shop",
                            "valueEn": "Schop",
                            "valueSk": "Obchod",
                            "valueDe": ""
                        },
                        {
                            "srcValue": "/services",
                            "valueEn": "Services",
                            "valueSk": "Služby",
                            "valueDe": ""
                        }
        ];
        $scoper.orderProp = 'srcValue';
    }]);

