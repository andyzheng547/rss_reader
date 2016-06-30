function FeedController($http, $state, SharedDataService, GoogleFeedsService) {
  var self = this;

  self.currentRssUrl = SharedDataService.getCurrentFeed();

  self.getCurrentFeed = function(){
    debugger;
    GoogleFeedsService.loadRssFeed(self.currentRssUrl).then(function(resp){
      self.currentFeed = resp.data.responseData.feed.entries;
    });
  };

  self.alertCurrentFeed = function(){
    debugger;
    alert(JSON.stringify(self.currentFeed));
  };

  self.userFeeds = SharedDataService.getCurrentUserFeeds();

  self.goToFeed = function(feed){
    SharedDataService.setCurrentFeed(feed.rss_link);

    $state.go('feed.read');
  };

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

  self.getCurrentFeed();
}

angular.module('RssReaderApp').controller('FeedController', FeedController);
