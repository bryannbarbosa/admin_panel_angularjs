'use strict';

/**
 * @ngdoc service
 * @name maikeApp.maikeAPI
 * @description
 * # maikeAPI
 * Factory in the maikeApp.
 */
angular.module('maikeApp').factory('maikeAPI', function($resource) {
  return {
    connect: function(params) {
      let BaseUrl = 'http://localhost:4000/api/';
      return $resource(BaseUrl + params, null, {
        'update': {
          method: 'PUT'
        }
      });
    }
  };
});
