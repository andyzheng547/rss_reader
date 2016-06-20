var userNavigation = {
  bindings: {
    // Can pull variables from component attributes
    // someVariable: "="
  },
  templateUrl: 'partials/userNavigation.html'
};

angular.module('RssReaderApp').component('userNavigation', userNavigation);
