'use strict';

angular.module('myApp', [
    'ngRoute',
    'myApp.services',
    'myApp.controllers'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'NavigationCtrl'});
    $routeProvider.when('/gallery', {templateUrl: 'partials/gallery.html', controller: 'NavigationCtrl'});
    $routeProvider.when('/shop', {templateUrl: 'partials/shop.html', controller: 'NavigationCtrl'});
    $routeProvider.when('/services', {templateUrl: 'partials/services.html', controller: 'NavigationCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
}]);
