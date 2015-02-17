angular.module('Teewinot').config(function($routeProvider) {
  'use strict';
  $routeProvider
    .when('/', {
      templateUrl: 'app/templates/home.html'
    })
    .when('/investment-philosophy', {
      templateUrl: 'app/templates/philosophy.html',
    })
    .when('/teewinot-blog', {
      templateUrl: 'app/templates/blog.html',
    })
    .when('/about', {
      templateUrl: 'app/templates/about.html'
    })
    .when('/portfolio-companies', {
      templateUrl: 'app/templates/portfolio.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
