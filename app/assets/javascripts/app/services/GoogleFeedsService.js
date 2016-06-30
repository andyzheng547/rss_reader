angular.module('RssReaderApp')
  .service('GoogleFeedsService', function($http) {

    // Takes a query and use Google's Feed Service to find a list rss feeds
    this.findRssFeed = function(query){
      return $http.get('https://ajax.googleapis.com/ajax/services/feed/find',{
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
    };

    // Takes a rss link and uses Google's Feed Service to get up to 50 posts from that rss feed
    this.loadRssFeed = function(rss_link){
      return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURI(rss_link));
    };
      // .then(function successCallback(resp){
    //     console.log('Success: Got response from Google Feed Service. Loading feeds.');
    //     return resp.data.responseData.feed.entries;
    //   }, function errorCallback(resp){
    //     console.log('Failure: Got status ' + resp.status + ', ' + resp.statusText);
    //     return resp.data;
    //   });
    // };

});
