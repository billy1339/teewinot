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
  };

  $scope.createPost = function(data) {
    var params;
    params = {post: data};
    $http.post('https://aqueous-mesa-3317.herokuapp.com/posts', params).success(function(response) {
      clearForm();
      updateView(response);
    }).error(function() {
      alert("Please Enter the Correct Passcode. If you don't know the Passcode ask someone who does. If you don't know who to ask then you don't have the privlage to post.");
    });

  }


});
