'use strict';

describe('Controller: CategorieslistCtrl', function () {

  // load the controller's module
  beforeEach(module('maikeApp'));

  var CategorieslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategorieslistCtrl = $controller('CategorieslistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CategorieslistCtrl.awesomeThings.length).toBe(3);
  });
});
