function FeedController($http, $state, $sce, FeedService, SharedDataService, GoogleFeedsService) {
  var self = this;

  self.userFeeds = SharedDataService.getCurrentUserFeeds();

  // Add onload listener to iframe to check for same origin error
  self.attachIframeListener = function(){
    var iframe = document.getElementById('iframe');
    iframe.onload = function(){
      // Try checking iframe contentWindow
      // If length is greater than 0, then it is loaded,
      // otherwise it is probably the source's X-Frame-Options denying access
      try {
        var iframeWindow = iframe.contentWindow;
        if (iframeWindow.length > 0) {
          console.log('iframe loaded: ' + self.currentLink);
        } else {
          console.log('iframe could not load: ' + self.currentLink);
          alert('iframe could not be loaded. source refused to display.')
        }
      }

      // Just in case of error
      catch(e) {
        alert('error loading iframe: ' + e);
      }
    };
  };

  // Gets when current rss feed when state is feed.read
  self.loadCurrentFeed = function(){
    // User Google Feed API to find current posts from that rss feed
    GoogleFeedsService.loadRssFeed(self.currentRssUrl).then(function(resp){
      self.attachIframeListener();
      self.currentFeed = resp.data.responseData.feed.entries;
      self.currentLink = $sce.trustAsResourceUrl(self.currentFeed[0].link);
    });
  };

  // Called from feed.read. Will reset currentLink, which is the iframes src
  self.setCurrentLink = function(link){
    self.currentLink = $sce.trustAsResourceUrl(link);
  };

  // Called when going to feed.read
  self.goToFeed = function(feed){
    SharedDataService.setCurrentFeedUrl(feed.rss_link);

    $state.go('feed.read');
  };

  // Takes query from feed.create and finds rss feeds using Google Feed API
  self.discoverFeeds = function(query){
    GoogleFeedsService.findRssFeed(query).then(function(resp){
      self.googleRssResults = resp.data.responseData.entries;
      console.log('You got this back from Google: \n\t' + JSON.stringify(resp));
    });
  };

  self.createFeed = function(feedParams){
    feedParams.user_id = SharedDataService.getCurrentUser().id;
    debugger;
    FeedService.createFeed(feedParams).then(function(resp){
      if (resp.status === 201){
        console.log('Status 201. Created rss feed. Redirecting to feed display.');
        $state.go('feed.all');
      } else {
        console.log('Had trouble saving your rss feed to database.');
      }
    });
  };

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

  if ($state.current.name === "feed.read"){
    self.currentRssUrl = SharedDataService.getCurrentFeedUrl();
    self.loadCurrentFeed();
  }

}

angular.module('RssReaderApp').controller('FeedController', FeedController);
