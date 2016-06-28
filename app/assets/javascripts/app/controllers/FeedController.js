function FeedController($http, $state, SharedDataService, GoogleFeedsService) {
  var self = this;
  // When feed is clicked in feed.all, get the rss link attribute in the feed tab
  // Call the getFeed() function and set the currentFeed to the returned data
  self.currentFeed;
  self.userFeeds = SharedDataService.getCurrentUserFeeds();

  // this.createFeed = function(feedParams){
  //   $http.post('/feeds', {params: {rss: feedParams}}).then(function successCallback(resp){
  //     console.log('Created rss feed ' + resp.data.rss.id);
  //   }, function errorCallback(resp){
  //     console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
  //   });
  // };
  //
  // this.updateFeed = function(feedParams){
  //   $http.put('/feeds/' + SharedDataService.getUserId(), {params: {rss: feedParams}}).then(function successCallback(resp){
  //     console.log('Updated rss feed ' + resp.data.rss.id);
  //   }, function errorCallback(resp){
  //     console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
  //   });
  // };
  //
  // this.deleteFeed = function(feedParams){
  //   $http.delete('/feeds/' + SharedDataService.getUserId(), {params: {rss: feedParams}}).then(function successCallback(resp){
  //     console.log('Deleted rss feed ' + resp.data.rss.id);
  //   }, function errorCallback(resp){
  //     console.log('Status' + resp.status + '\nServer responded with: ' + JSON.stringify(resp.data.errors));
  //   });
  // };
  //
  this.getFeed = function(rss_link){
    // Use Google Feed Service api to load the posts from that rss link
    self.currentFeed = GoogleFeedsService.loadRssFeed(rss_link);
  };

  this.goToFeed = function(feed){
    debugger;
    self.getFeed(feed.rss_link);
    SharedDataService.setCurrentFeed(self.currentFeed);

    $state.go('feed.read');
  };

}

angular.module('RssReaderApp').controller('FeedController', FeedController);
