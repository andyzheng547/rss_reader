angular.module('RssReaderApp').service('FeedService', function($http) {

  // Takes the method to be called from $http and passes in the route and configurations
  // Will return the deferred promise containing either the user info or errors
  // Reuseable in all calls to the backend
  this.makeAjaxCall = function(httpMethod, route, data){
    // Create deferred object with $q
    var deferred = $q.defer();

    // Make ajax call to user route and return data
    httpMethod(route, data).then(
      // Success callback - return data with user info
      function(resp){
        deferred.resolve(resp);
      // Error callback - return data with errors
    }, function(resp){
        deferred.resolve(resp);
      }
    );

    return deferred.promise;
  }

  // this.createFeed = function(feedParams){
  //   
  // };

});
