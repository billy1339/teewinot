angular.module('Teewinot').factory('PostFactory', function($http, $q) {
  'use strict';

  var fetch = function() {
    var deferred, posts;
    deferred = $q.defer();
    $http.get('http://localhost:3000/posts')
      .success(function(response) {
        posts = [];
        angular.copy(response, posts);
        deferred.resolve(posts);
      });

    return deferred.promise;
  };

  return {
    fetch: fetch
  };

});
