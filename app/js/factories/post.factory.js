angular.module('Teewinot').factory('PostFactory', function($http, $q) {
  'use strict';

  var fetch = function() {
    var deferred, posts;
    deferred = $q.defer();
    $http.get('https://aqueous-mesa-3317.herokuapp.com/posts')
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
