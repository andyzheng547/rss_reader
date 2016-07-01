angular.module('RssReaderApp')
  .service('GoogleFeedsService', function($http) {

    // Takes a query and use Google's Feed Service to find a list rss feeds
    this.findRssFeed = function(query){
      return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&callback=JSON_CALLBACK&q=' + encodeURI(query));
    };

    // Takes a rss link and uses Google's Feed Service to get up to 50 posts from that rss feed
    this.loadRssFeed = function(rss_link){
      return $http.jsonp('https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURI(rss_link));
    };

});
