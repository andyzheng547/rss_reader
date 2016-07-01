function FeedController($http, $state, $sce, SharedDataService, GoogleFeedsService) {
  var self = this;

  self.currentRssUrl = SharedDataService.getCurrentFeedUrl();
  self.userFeeds = SharedDataService.getCurrentUserFeeds();

  self.setCurrentLink = function(link){
    debugger;
    self.currentLink = link;
  };

  self.loadCurrentFeed = function(){
    debugger;
    if ($state.current.name === "feed.read"){
      GoogleFeedsService.loadRssFeed(self.currentRssUrl).then(function(resp){
        self.currentFeed = resp.data.responseData.feed.entries;
        self.currentLink = $sce.trustAsResourceUrl(self.currentFeed[0].link);
      });
    }
  };

  self.setCurrentLink = function(link){
    self.currentLink = $sce.trustAsResourceUrl(link);
  };

  self.goToFeed = function(feed){
    SharedDataService.setCurrentFeedUrl(feed.rss_link);

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


  self.discoverFeeds = function(query){
    GoogleFeedsService.findRssFeed(query).then(function(resp){
      // debugger;
      self.googleRssResults = resp.data.responseData.entries;
      console.log('You got this back from Google: \n\t' + JSON.stringify(resp));
      alert('You got this back from Google: \n\t' + JSON.stringify(resp))
    });
  };

  self.loadCurrentFeed();

}

angular.module('RssReaderApp').controller('FeedController', FeedController);
