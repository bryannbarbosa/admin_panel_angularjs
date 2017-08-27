'use strict';

/**
 * @ngdoc function
 * @name maikeApp.controller:ExercisesCtrl
 * @description
 * # ExercisesCtrl
 * Controller of the maikeApp
 */
angular.module('maikeApp')
  .controller('ExercisesCtrl', function (maikeAPI, $scope, $window) {
    maikeAPI.connect('exercises').get(function(data) {
      $scope.exercises = data;
    }, function(err) {
      console.log('error in get exercises');
    });
    maikeAPI.connect('categories').get(function(data) {
      $scope.categories = data;
    }, function(err) {
      console.log('error in get categories');
    });
    $scope.getExercises = function() {
      maikeAPI.connect('exercises').get(function(data) {
        $scope.exercises = data;
      }, function(err) {
        console.log('error in get exercises');
      });
    }

    $scope.insertExercise = function(exercise) {
      let data = {
        id_category: exercise.category.id,
        exercise_name: exercise.exercise_name
      };
      maikeAPI.connect('exercises').save(angular.copy(data), function(resp, headers) {
        $window.alert('Exercício criado com sucesso com sucesso!');
        $scope.getExercises();
        $scope.exercise.exercise_name = '';
      }, function(err) {
        $window.alert('Erro em criar o exercício, tente novamente.');
      });
    }

    $scope.updateExercise = function(exercise) {

      let id = exercise.id;
      let data = {
        exercise_name: exercise.exercise_name
      };
      maikeAPI.connect('exercises/' + id).update(data, function(resp, headers) {
        $window.alert('Exercício atualizado com sucesso!');
        $scope.getExercises();
      }, function(err) {
        $window.alert('Erro ao atualizar exercício, tente novamente');
      });

    }

    $scope.removeExercise = function(id) {
      if (confirm("Deseja realmente remover os exercícios?")) {
        maikeAPI.connect('exercises/' + id).remove(function(resp, headers) {
          $window.alert('Exercício removido com sucesso!');
          $scope.getExercises();
        }, function(err) {
          $window.alert('Erro em remover os exercícios, tente novamente.');
        });
      }

    }

  });
