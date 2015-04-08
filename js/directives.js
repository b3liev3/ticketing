'use strict'
/* Directives*/

var blogDirectives = 
        angular.module('blogDirectives', []);

        blogDirectives.directive('blgMenu', function (){
            return {
                restrict: 'A',
                templateUrl: 'partials/menu.html',
                link: function (scope, el, attrs){
                    console.log(attrs.currentPage);
                if(attrs.currentPage === 'new'){
                    scope.new = "uk-active";
                }else if(attrs.currentPage === 'my-tickets'){
                    scope.myTickets = "uk-active";
                }
                
                }
            }
        });