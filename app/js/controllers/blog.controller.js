angular.module('Teewinot').controller('BlgoCtrl', function($scope, $http, PostFactory) {
  'use strict'

  var promise, clearForm;

  promise = PostFactory.fetch();
  promise.then(function(posts) {
    $scope.posts = posts

  })

  clearForm = function() {
    $scope.post = {};
  };

  $scope.createPost = function(data) {
    var params;
    params = data;
    $http.post('localhost:3000/posts').success(function(response) {
      console.log(response);
      clearForm();
    })

  }


});
