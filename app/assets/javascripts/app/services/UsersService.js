angular.module('RssReaderApp')
  .service('UserService', function($http, $q) {

    // Takes the method to be called from $http and passes in the route and configurations
    // Will return the deferred promise containing either the user info or errors
    // Reuseable in all calls to the backend
    this.makeAjaxCall = function(httpMethod, route, config){
      // Create deferred object with $q
      var deferred = $q.defer();

      // Make ajax call to user route and return data
      httpMethod(route, config).then(
        // Success callback - return data with user info
        function(resp){
          deferred.resolve(resp.data);
        // Error callback - return data with errors
      }, function(resp){
          deferred.resolve(resp.data);
        }
      );

      return deferred.promise;
    }

    // GET user from backend
    this.findUser = function(userParams){
      var httpMethod = $http.get;
      var route = '/users/find';
      var config = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, config);
    };


    // POST user in backend
    this.createUser = function(userParams){
      var httpMethod = $http.post;
      var route = '/users';
      var config = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, config);
    };

    // PUT user in backend
    this.updateUser = function(user_id, userParams){
      var httpMethod = $http.put;
      var route = '/users/' + userId;
      var config = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, config);
    };

    // DELETE user in backend
    this.deleteUser = function(){
      var httpMethod = $http.delete;
      var route = '/users/' + userId;
      var config = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, config);
    };

});
