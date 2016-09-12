angular.module('RssReaderApp')
  .service('UserService', ['$http', '$q', function($http, $q) {

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

    // GET user from backend with username and password
    // For login purposes
    this.findUser = function(userParams){
      var httpMethod = $http.get;
      var route = '/users/find';
      var data = {params: {user: userParams}};

      return this.makeAjaxCall(httpMethod, route, data);
    };

    // GET user from backend with user id
    // For updating currentUser when user is already logged in
    this.findUserById = function(user_id){
      var httpMethod = $http.get;
      var route = '/users/' + user_id;

      return this.makeAjaxCall(httpMethod, route);
    };

    // POST user in backend
    this.createUser = function(userParams){
      var httpMethod = $http.post;
      var route = '/users';
      var data = {user: userParams};

      return this.makeAjaxCall(httpMethod, route, data);
    };

    // PUT user in backend
    this.updateUser = function(user_id, userParams){
      var httpMethod = $http.put;
      var route = '/users/' + user_id;
      var data = {user: userParams};

      return this.makeAjaxCall(httpMethod, route, data);
    };

    // DELETE user in backend
    this.deleteUser = function(user_id){
      var httpMethod = $http.delete;
      var route = '/users/' + user_id;

      return this.makeAjaxCall(httpMethod, route);
    };

}]);
