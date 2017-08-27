'use strict';

describe('Controller: ExercisesCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var ExercisesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExercisesCtrl = $controller('ExercisesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExercisesCtrl.awesomeThings.length).toBe(3);
  });
});
