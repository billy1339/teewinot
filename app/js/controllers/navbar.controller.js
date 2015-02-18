angular.module('Teewinot').controller('NavbarCtrl', function($scope, $location) {
  'use strict'

  $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
  };
});
