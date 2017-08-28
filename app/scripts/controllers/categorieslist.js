'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:CategorieslistCtrl
 * @description
 * # CategorieslistCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp')
  .controller('CategorieslistCtrl', function ($scope, maikeAPI, $window) {
    maikeAPI.connect('categories').get(function(data) {
      $scope.categories = data;
    }, function(err) {
      console.log('error in get categories');
    });

    $scope.getCategories = function() {
      maikeAPI.connect('categories').get(function(data) {
        $scope.categories = data;
      }, function(err) {
        console.log('error in get categories');
      });
    }

    $scope.removeCategory = function(id) {
      if (confirm("Deseja realmente remover a categoria?")) {
        maikeAPI.connect('categories/' + id).remove(function(resp, headers) {
          $window.alert('Categoria removida com sucesso!');
          $scope.getCategories();
        }, function(err) {
          $window.alert('Erro em remover a categoria, tente novamente.');
        });
      }

    }
    $scope.updateCategory = function(category) {

      var id = category.id;
      var data = {
        category_name: category.category_name,
        category_description: category.category_description
      };
      maikeAPI.connect('categories/' + id).update(data, function(resp, headers) {
        $window.alert('Categoria atualizada com sucesso!');
        $scope.getCategories();
      }, function(err) {
        console.log(err);
      });

    }
  });
