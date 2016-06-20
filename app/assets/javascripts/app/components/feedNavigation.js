var feedNavigation = {
  bindings: {
    // Can pull variables from component attributes
    // someVariable: "="
  },
  templateUrl: 'partials/feedNavigation.html'
};

angular.module('RssReaderApp').component('feedNavigation', feedNavigation);
