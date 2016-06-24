angular.module('RssReaderApp').factory('UsersService', function($http) {

  function getUserFeeds(userId){
    // Get all the users feeds from backend
    $http.get('/user/' + userId).then(function successCallback(resp){
      console.log('Found user ' + userId + ' rss feeds');
      return resp.data.user.rss;
    }, function errorCallback(resp){
      console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
    });
  }

  return {
    getUserFeeds: getUserFeeds
  };
});
