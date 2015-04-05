'use strict';
/* App Module*/

var Tickets = Tickets || {};

Tickets.helpers = {
    badge: function (status) {
        if (status === 'CLOSED') {
            return 'uk-badge-danger';
        }
        return 'uk-badge-success';
    }
};

var app = angular.module('blogApp', [
    'ngRoute',
    'ticketsControllers',
    'blogDirectives'
]);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/newTicket.html',
                    controller: 'NewTicketCtrl'
                }).
                when('/my-tickets', {
                    templateUrl: 'partials/myTickets.html',
                    controller: 'MyTicketsCtrl'
                }).
                when('/ticket/:id', {
                    templateUrl: 'partials/ticket.html',
                    controller: 'TicketCtrl'
                });
    }]);