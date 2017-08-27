'use strict';

describe('Controller: ComparisonsCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var ComparisonsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComparisonsCtrl = $controller('ComparisonsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComparisonsCtrl.awesomeThings.length).toBe(3);
  });
});
