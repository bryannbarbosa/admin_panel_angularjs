'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp').controller('MainCtrl', function($scope, maikeAPI, $window) {
  maikeAPI.connect('categories').get(function(data) {
    $scope.categories = data;
  }, function(err) {
    console.log('error in get categories');
  });
  $scope.insertCategory = function(category) {
    maikeAPI.connect('categories').save(angular.copy(category), function(resp, headers) {
      $window.alert('Categoria criada com sucesso!');
      $scope.getCategories();
      $scope.category.category_name = '';
      $scope.category.description = '';
    }, function(err) {
      $window.alert('Erro em criar a categoria, tente novamente.');
    });
  }

});
