'use strict';
/* Controllers */

var fakeIndexTickets = {
    11802:0,
    11300:1,
    11146:2,
    10985:3,
    11433:4,
    10977:5
}

var fakeTickets = [
    {
        "id": 11802,
        "category": "Emails on Outlook",
        "notified": '2015-02-16',
        "status": 'CLOSED'
    },
    {
        "id": 11300,
        "category": "MS Office",
        "notified": '2015-04-01',
        "status": 'OPEN'
    },
    {
        "id": 11146,
        "category": "Network problem",
        "notified": '2015-02-03',
        "status": 'CLOSED'
    },
    {
        "id": 10985,
        "category": "Phone configuration",
        "notified": '2015-01-24',
        "status": 'OPEN'
    },
    {
        "id": 11433,
        "category": "Replace toner",
        "notified": '2015-01-16',
        "status": 'CLOSED'
    },
    {
        "id": 10977,
        "category": "Other",
        "notified": '2014-12-30',
        "status": 'CLOSED'
    }
];

var ticketsControllers =
        angular.module('ticketsControllers', []);

ticketsControllers.controller('NewTicketCtrl', ['$scope',
    function NewTicketCtrl($scope) {
        
    }]);

ticketsControllers.controller('MyTicketsCtrl', ['$scope',
    function MyTicketsCtrl($scope){
        $scope.tickets = fakeTickets;
        $scope.helpers = Tickets.helpers;
    }
]);

ticketsControllers.controller('TicketCtrl', ['$scope','$routeParams',
    function TicketCtrl($scope,$routeParams) {
        $scope.ticket = fakeTickets[fakeIndexTickets[$routeParams.id]];
        $scope.helpers = Tickets.helpers;
    }]);