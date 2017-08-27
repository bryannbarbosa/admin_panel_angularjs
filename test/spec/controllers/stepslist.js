'use strict';

describe('Controller: StepslistCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var StepslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StepslistCtrl = $controller('StepslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(StepslistCtrl.awesomeThings.length).toBe(3);
  });
});
