'use strict';

describe('Service: maikeAPI', function () {

  // load the service's module
  beforeEach(module('maikeApp'));

  // instantiate service
  var maikeAPI;
  beforeEach(inject(function (_maikeAPI_) {
    maikeAPI = _maikeAPI_;
  }));

  it('should do something', function () {
    expect(!!maikeAPI).toBe(true);
  });

});
