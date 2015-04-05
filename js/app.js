'use strict';
/* App Module*/

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'ticketsControllers',
    'blogDirectives'
]);

blogApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/newTicket.html',
                    controller: 'NewTicketCtrl'
                }).
                when('/blogPost/:id', {
                    templateUrl: 'partials/blogPost.html',
                    controller: 'BlogViewCtrl'
                });
    }]);