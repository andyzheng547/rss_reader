angular.module('RssReaderApp')
  .service('UserService', function($http, $q) {

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
      var data = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, data);
    };

    // POST user in backend
    this.createUser = function(userParams){
      var httpMethod = $http.post;
      var route = '/users';
      var data = {user: userParams};

      debugger;
      return this.makeAjaxCall(httpMethod, route, data);
    };

    // PUT user in backend
    this.updateUser = function(userParams, user_id){
      var httpMethod = $http.put;
      var route = '/users/' + userId;
      var data = {user: userParams};

      return this.makeAjaxCall(httpMethod, route, data);
    };

    // DELETE user in backend
    this.deleteUser = function(user_id){
      var httpMethod = $http.delete;
      var route = '/users/' + userId;
      var data = {user: userParams};

      return this.makeAjaxCall(httpMethod, route, data);
    };

});
