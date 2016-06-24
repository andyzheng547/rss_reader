angular.module('RssReaderApp').factory('GoogleFeedsService', function($http) {
  function findRssFeed(query){
    $http.get('https://ajax.googleapis.com/ajax/services/feed/find',{
      params: {
        v: 1.0,
        q: query,
      }
    }).then(function successCallback(resp){
      console.log('Success: Got response from Google Feed Service. Found feeds.');
      return resp.data;
    }, function errorCallback(resp){
      console.log('Failure: Got status ' + resp.status + ', ' + resp.statusText);
      return resp.data;
    });
  }

  function loadRssFeed(rss_link){
    $http.get('https://ajax.googleapis.com/ajax/services/feed/load',{
      params: {
        v: 1.0,
        q: rss_link,
        num: 50
      }
    }).then(function successCallback(resp){
      console.log('Success: Got response from Google Feed Service. Loading feeds.');
      return resp.data;
    }, function errorCallback(resp){
      console.log('Failure: Got status ' + resp.status + ', ' + resp.statusText);
      return resp.data;
    });
  }

  return {
    findRssFeed: findRssFeed,
    loadRssFeed: loadRssFeed
  };
}
