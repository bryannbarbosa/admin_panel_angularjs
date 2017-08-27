'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:StepsCtrl
 * @description
 * # StepsCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp')
  .controller('StepsCtrl', function ($scope, maikeAPI, $window, Upload) {
    maikeAPI.connect('exercises').get(function(data) {
      $scope.exercises = data;
    }, function(err) {
      console.log('error in get exercises');
    });

    $scope.insertStep = function(file, step) {
      console.log(step);
      Upload.upload({
        url: 'http://localhost:4000/api/steps',
        data: {
          file: file,
          step: step
        }
      }).then(function(res) {
        if (res.data.response.error_code === 0) {
          $window.alert('Passo inserida com sucesso!');
        } else {
          console.log(res);
        }
      }, function(res) {
        $window.alert('Erro ao inserir passo, tente novamente.');
      });
    }
  });
