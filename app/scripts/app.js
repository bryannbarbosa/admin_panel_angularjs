'use strict';

/**
 * @ngdoc overview
 * @name maikeApp
 * @description
 * # maikeApp
 *
 * Main module of the application.
 */
angular
  .module('maikeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngFileUpload'
  ])
  .config(function ($routeProvider, $httpProvider, $locationProvider) {
    var accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTAzNTk0OTk1fQ.QWsAgg-RBdfplmc6FzXMyxpQDjCpG4zhlYDnHYPvoGg';
    $httpProvider.defaults.headers.common.Authorization = 'Bearer ' + accessToken;
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/exercicios', {
        templateUrl: 'views/exercises.html',
        controller: 'ExercisesCtrl',
        controllerAs: 'exercises'
      })
      .when('/comparacoes', {
        templateUrl: 'views/comparisons.html',
        controller: 'ComparisonsCtrl',
        controllerAs: 'comparisons'
      })
      .when('/comparacoes/listar', {
        templateUrl: 'views/comparisonslist.html',
        controller: 'ComparisonslistCtrl',
        controllerAs: 'comparisonsList'
      })
      .when('/categorias/listar', {
        templateUrl: 'views/categorieslist.html',
        controller: 'CategorieslistCtrl',
        controllerAs: 'categoriesList'
      })
      .when('/passos', {
        templateUrl: 'views/steps.html',
        controller: 'StepsCtrl',
        controllerAs: 'steps'
      })
      .when('/passos/listar', {
        templateUrl: 'views/stepslist.html',
        controller: 'StepslistCtrl',
        controllerAs: 'stepsList'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.hashPrefix('');
  });
