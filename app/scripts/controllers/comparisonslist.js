'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:ComparisonslistCtrl
 * @description
 * # ComparisonslistCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp').controller('ComparisonslistCtrl', function($scope, maikeAPI, $window, Upload) {
  maikeAPI.connect('comparisons').get(function(data) {
    $scope.comparisons = data;
    console.log($scope.comparisons);
  }, function(err) {
    console.log('error in get comparisons');
  });
  $scope.getComparisons = function() {
    maikeAPI.connect('comparisons').get(function(data) {
      $scope.comparisons = data;
    }, function(err) {
      console.log('error in get comparisons');
    });
  }

  $scope.updateComparison = function(file, comparison) {
    Upload.upload({
      url: 'http://localhost:4000/api/comparisons/' + comparison.id,
      method: 'PUT',
      data: {
        file: file,
        comparison_content: comparison.comparison_content,
        comparison_id: comparison.id
      }
    }).then(function(res) {
      if (res.data.response.error_code === 0) {
        $window.alert('Comparação atualizada com sucesso!');
      } else {
        console.log(res);
      }
    }, function(res) {
      $window.alert('Erro ao atualizar comparação, tente novamente.');
    });
    $scope.getComparisons();
  }

  $scope.removeComparison = function(id) {
    if (confirm("Deseja realmente remover a comparação?")) {
      maikeAPI.connect('comparisons/' + id).remove(function(resp, headers) {
        $window.alert('Comparação removida com sucesso!');
        $scope.getComparisons();
      }, function(err) {
        $window.alert('Erro em remover a comparação, tente novamente.');
      });
    }
  }

});
