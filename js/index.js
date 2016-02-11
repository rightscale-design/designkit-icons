// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
myApp.config(function($routeProvider) {
  $routeProvider

  // route for the about page
    .when('/', {
    templateUrl: 'icons.html',
    controller: 'iconsCtrl'
  })

  // route for the contact page
  .when('/:iconId', {
    templateUrl: 'icon.html',
    controller: 'iconsCtrl'
  });
});

// create the controller and inject Angular's $scope
myApp.controller('iconsCtrl', function($scope, $routeParams, $location) {
  // create a message to display in our view
  $scope.icons = [{
    id: 1,
    item: {
      name: 'Cloud',
      svg: 'svg/icon-cloud.svg#icon-cloud'
    }
  }, {
    id: 2,
    item: {
      name: 'Book',
      svg: 'svg/icon-book.svg#icon-book'
    }
  }, {
    id: 3,
    item: {
      name: 'Brush',
      svg: 'svg/icon-brush.svg#icon-brush'
    }
  }, {
    id: 4,
    item: {
      name: 'Admin',
      class: '.icon-admin',
      svg: 'svg/icon-admin.svg#icon-admin'
    }
  }, {
    id: 5,
    item: {
      name: 'Beta',
      svg: 'svg/icon-beta.svg#icon-beta'
    }
  }, {
    id: 6,
    item: {
      name: 'Attachment',
      svg: 'svg/icon-attachment.svg#icon-attachment'
    }
  }, {
    id: 7,
    item: {
      name: 'API',
      svg: 'svg/icon-api.svg#icon-api'
    }
  }, {
    id: 8,
    item: {
      name: 'Link',
      svg: 'svg/icon-link.svg#icon-link'
    }
  }, {
    id: 9,
    item: {
      name: 'Calendar',
      svg: 'svg/icon-calendar.svg#icon-calendar'
    }
  }, {
    id: 10,
    item: {
      name: 'Check',
      svg: 'svg/icon-check.svg#icon-check'
    }
  }, {
    id: 11,
    item: {
      name: 'Card View',
      svg: 'svg/icon-card-view.svg#icon-view-card'
    }
  }, {
    id: 12,
    item: {
      name: 'List View',
      svg: 'svg/icon-list-view.svg#icon-view-list'
    }
  }, {
    id: 13,
    item: {
      name: 'Caret Circle',
      svg: 'svg/icon-caret-circle.svg#icon-caret-circle'
    }
  }, {
    id: 14,
    item: {
      name: 'Checkmark Circled',
      svg: 'svg/icon-checkmark-circled.svg#icon-check-circle'
    }
  }, {
    id: 15,
    item: {
      name: 'Close',
      svg: 'svg/icon-close.svg#icon-close'
    }
  }, {
    id: 16,
    item: {
      name: 'Cog',
      svg: 'svg/icon-cog.svg#icon-cog'
    }
  }, {
    id: 17,
    item: {
      name: 'Edit',
      svg: 'svg/icon-edit.svg#icon-edit'
    }
  }, {
    id: 18,
    item: {
      name: 'Email',
      svg: 'svg/icon-email.svg#icon-email'
    }
  }, {
    id: 19,
    item: {
      name: 'Expand',
      svg: 'svg/icon-expand.svg#icon-expand'
    }
  }, {
    id: 20,
    item: {
      name: 'External',
      svg: 'svg/icon-external.svg#icon-external'
    }
  }, {
    id: 21,
    item: {
      name: 'Folded Map',
      svg: 'svg/icon-folded-map.svg#icon-folded-map'
    }
  }, {
    id: 22,
    item: {
      name: 'Folder',
      svg: 'svg/icon-folder.svg#icon-folder'
    }
  }, {
    id: 23,
    item: {
      name: 'Key',
      svg: 'svg/icon-key.svg#icon-key'
    }
  }, {
    id: 24,
    item: {
      name: 'Phone',
      svg: 'svg/icon-phone.svg#icon-phone'
    }
  }, {
    id: 25,
    item: {
      name: 'Shield',
      svg: 'svg/icon-shield.svg#icon-shield'
    }
  }, {
    id: 26,
    item: {
      name: 'Trash',
      svg: 'svg/icon-trash.svg#icon-trash'
    }
  }, {
    id: 27,
    item: {
      name: 'User',
      svg: 'svg/icon-user.svg#icon-user'
    }
  }, {
    id: 28,
    item: {
      name: 'Disable',
      svg: 'svg/icon-disable.svg#icon-disable'
    }
  }, {
    id: 29,
    item: {
      name: 'Lock',
      svg: 'svg/icon-lock.svg#icon-lock'
    }
  }, {
    id: 30,
    item: {
      name: 'Search',
      svg: 'svg/icon-search.svg#icon-search'
    }
  }, {
    id: 31,
    item: {
      name: 'Caret',
      svg: 'svg/icon-caret.svg#icon-caret'
    }
  }, {
    id: 32,
    item: {
      name: 'More Vertical',
      svg: 'svg/icon-more-vertical.svg#icon-more-vertical'
    }
  }, {
    id: 33,
    item: {
      name: 'More Horizontal',
      svg: 'svg/icon-more-horizontal.svg#icon-more-horizontal'
    }
  }, {
    id: 34,
    item: {
      name: 'Code Download',
      svg: 'svg/icon-code-download.svg#icon-code-download'
    }
  }, {
    id: 35,
    item: {
      name: 'Tooltip',
      svg: 'svg/icon-tooltip.svg#icon-tooltip'
    }
  }, {
    id: 36,
    item: {
      name: 'Alert',
      svg: 'svg/icon-alert.svg#icon-alert'
    }
  }, {
    id: 37,
    item: {
      name: 'Bell',
      svg: 'svg/icon-bell.svg#icon-bell'
    }
  }, {
    id: 38,
    item: {
      name: 'Bell Off',
      svg: 'svg/icon-bell-off.svg#icon-bell-off'
    }
  }, {
    id: 39,
    item: {
      name: 'Stop',
      svg: 'svg/icon-stop.svg#icon-stop'
    }
  }];

  $scope.selectedIcon = _.find($scope.icons, {
    item: {
      name: $routeParams.iconId
    }
  });
  if ($routeParams.iconId && $scope.selectedIcon === undefined) {
    $location.url('/icons/not_found');
  }

});
