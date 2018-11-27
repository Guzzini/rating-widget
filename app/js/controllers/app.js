'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers',
  'myApp.controllers.comments',
  'myApp.services',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 // $locationProvider.hashPrefix('!');
  $routeProvider.when('/', {templateUrl: 'templates/submit_comment.html',controller: 'commentController'})
      .when('/comments',{templateUrl: 'templates/view_comment.html', controller:'mainController'})
      .otherwise({redirectTo: '/'});
 // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
