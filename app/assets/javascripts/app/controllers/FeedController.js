function FeedController($http, SharedDataService) {
  // EITHER NEED TO CREATE ROUTE ON BACKEND TO GET USER FEEDS OR PASS IN DATA TO CONTROLLER WHEN INITIALIZED

  // When feed is clicked in feed.all, get the rss link attribute in the feed tab
  // Call the getFeed() function and set the currentFeed to the returned data
  this.currentFeed;

  this.createFeed = function(data){
    $http.post('/feeds', data: data).then(function successCallback(resp){

    }, function errorCallback(resp){

    });
  };

  this.updateFeed = function(data){
    $http.put('/feeds/' + data.id, data: data).then(function successCallback(resp){

    }, function errorCallback(resp){

    });
  };

  this.deleteFeed = function(data){
    $http.delete('/feeds/' + data.id, data: data).then(function successCallback(resp){

    }, function errorCallback(resp){

    });
  };

  this.listFeeds = function(){
    // List all the users feeds
  };

  this.getFeed = function(){
    // Use Google Feed Service api to load the posts from that rss link
  };

}

angular.module('RssReaderApp').controller('FeedController', FeedController);
