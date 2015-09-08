'use strict';
(function(angular) {
  var app = angular.module('geoApp', []);
  
  app.controller('indexController', function() {
    var index = this;
    
    index.title = 'Geolocation Test';
    index.description = 'This is a geolocation test.';
    
    index.time = new Date();
    
    index.browserAgent = navigator.userAgent;
  });
})(angular);