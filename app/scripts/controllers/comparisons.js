'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:ComparisonsCtrl
 * @description
 * # ComparisonsCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp').controller('ComparisonsCtrl', function($scope, $window, maikeAPI, Upload) {

  maikeAPI.connect('exercises').get(function(data) {
    $scope.exercises = data;
  }, function(err) {
    console.log('error in get exercises');
  });

  $scope.insertComparison = function(file, comparison) {
    Upload.upload({
      url: 'http://localhost:4000/api/comparisons',
      data: {
        file: file,
        comparison: comparison
      }
    }).then(function(res) {
      if (res.data.response.error_code === 0) {
        $window.alert('Comparação inserida com sucesso!');
      } else {
        console.log(res);
      }
    }, function(res) {
      $window.alert('Erro ao inserir comparação, tente novamente.');
    });
  }
});
