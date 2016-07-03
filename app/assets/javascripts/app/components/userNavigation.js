var userNavigation = {
  bindings: {},
  controller: 'UserController as user',
  templateUrl: 'partials/userNavigation.html',
};

angular.module('RssReaderApp').component('userNavigation', userNavigation);
