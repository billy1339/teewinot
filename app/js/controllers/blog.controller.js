angular.module('Teewinot').controller('BlgoCtrl', function($scope, $http, PostFactory) {
  'use strict'

  var promise;

  promise = PostFactory.fetch();
  promise.then(function(posts) {
    $scope.posts = posts
    debugger
  })


});
