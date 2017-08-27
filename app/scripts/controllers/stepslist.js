'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:StepslistCtrl
 * @description
 * # StepslistCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp')
  .controller('StepslistCtrl', function ($scope, maikeAPI, $window, Upload) {
    maikeAPI.connect('steps').get(function(data) {
      $scope.steps = data;
      console.log($scope.steps);
    }, function(err) {
      console.log('error in get steps');
    });
    $scope.getSteps = function() {
      maikeAPI.connect('steps').get(function(data) {
        $scope.steps = data;
      }, function(err) {
        console.log('error in get steps');
      });
    }

    $scope.updateStep = function(file, step) {
      Upload.upload({
        url: 'http://localhost:4000/api/steps/' + step.id,
        method: 'PUT',
        data: {
          file: file,
          step_name: step.step_name,
          step_content: step.step_content
        }
      }).then(function(res) {
        if (res.data.response.error_code === 0) {
          $window.alert('Passo atualizado com sucesso!');
        } else {
          console.log(res);
        }
      }, function(res) {
        $window.alert('Erro ao atualizar passo, tente novamente.');
      });
      $scope.getSteps();
    }

    $scope.removeStep = function(id) {
      if (confirm("Deseja realmente remover o passo?")) {
        maikeAPI.connect('steps/' + id).remove(function(resp, headers) {
          $window.alert('Passo removida com sucesso!');
          $scope.getSteps();
        }, function(err) {
          $window.alert('Erro em remover o passo, tente novamente.');
        });
      }
    }
  });
