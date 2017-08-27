'use strict';

describe('Controller: ComparisonslistCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var ComparisonslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComparisonslistCtrl = $controller('ComparisonslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComparisonslistCtrl.awesomeThings.length).toBe(3);
  });
});
