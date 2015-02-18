angular.module('Teewinot').controller('BlgoCtrl', function($scope, $http, PostFactory) {
  'use strict'

  var promise, clearForm, updateView;

  promise = PostFactory.fetch();
  promise.then(function(posts) {
    $scope.posts = posts

  })

  clearForm = function() {
    $scope.post = {};
  };

  updateView = function(newPost) {
    $scope.posts.unshift(newPost);
    // $scope.$apply();
    debugger
  };

  $scope.createPost = function(data) {
    var params;
    params = {post: data};
    console.log(params.post);
    $http.post('http://localhost:3000/posts', params).success(function(response) {
      console.log(response);
      clearForm();
      updateView(response);
    })

  }


});
