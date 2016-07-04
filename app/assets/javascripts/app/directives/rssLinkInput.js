function rssLinkInput(){
  return {
    require: '^form',
    restrict: 'E',
    templateUrl: 'partials/rssLinkInput.html'
  }
}

angular.module('RssReaderApp').directive('rssLinkInput', rssLinkInput);
