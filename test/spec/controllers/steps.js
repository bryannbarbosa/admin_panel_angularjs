'use strict';

describe('Controller: StepsCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var StepsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StepsCtrl = $controller('StepsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StepsCtrl.awesomeThings.length).toBe(3);
  });
});
