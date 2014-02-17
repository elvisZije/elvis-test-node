var appServices = angular.module('myApp.services', ['ngResource']);

appServices.factory('NavigationService', ['$resource',
    function($resource) {
        return $resource('jsonItems/:itemId.json', {}, {
            query: {method: 'GET', params: {itemId: 'navigationItems'}, isArray: true}
        });
    }]);

