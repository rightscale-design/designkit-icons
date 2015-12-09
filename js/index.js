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
      name: 'Admin',
      class: '.icon-admin',
      svg: 'svg/icon-admin.svg'
    }
  }, {
    id: 2,
    item: {
      name: 'API',
      svg: 'svg/icon-api.svg'
    }
  }, {
    id: 3,
    item: {
      name: 'Arrow Down',
      svg: 'svg/icon-arrow-down.svg'
    }
  }, {
    id: 4,
    item: {
      name: 'Arrow Right',
      svg: 'svg/icon-arrow-right.svg'
    }
  }, {
    id: 5,
    item: {
      name: 'Arrow Left',
      svg: 'svg/icon-arrow-left.svg'
    }
  }, {
    id: 6,
    item: {
      name: 'Arrow Up',
      svg: 'svg/icon-arrow-up.svg'
    }
  }, {
    id: 7,
    item: {
      name: 'Arrow',
      svg: 'svg/icon-arrow.svg'
    }
  }, {
    id: 8,
    item: {
      name: 'Attachment',
      svg: 'svg/icon-attachment.svg'
    }
  }, {
    id: 9,
    item: {
      name: 'Back Button',
      svg: 'svg/icon-back-button.svg'
    }
  }, {
    id: 10,
    item: {
      name: 'Beta',
      svg: 'svg/icon-beta.svg'
    }
  }, {
    id: 11,
    item: {
      name: 'Book',
      svg: 'svg/icon-book.svg'
    }
  }, {
    id: 12,
    item: {
      name: 'Brush',
      svg: 'svg/icon-brush.svg'
    }
  }, {
    id: 13,
    item: {
      name: 'Calendar',
      svg: 'svg/icon-calendar.svg'
    }
  }, {
    id: 14,
    item: {
      name: 'Card View',
      svg: 'svg/icon-card-view.svg'
    }
  }, {
    id: 15,
    item: {
      name: 'Caret',
      svg: 'svg/icon-caret-2.svg'
    }
  }, {
    id: 16,
    item: {
      name: 'Caret Circle',
      svg: 'svg/icon-caret-circle.svg'
    }
  }, {
    id: 17,
    item: {
      name: 'Caret',
      svg: 'svg/icon-caret.svg'
    }
  }, {
    id: 18,
    item: {
      name: 'Check',
      svg: 'svg/icon-check.svg'
    }
  }, {
    id: 19,
    item: {
      name: 'Checkmark Circled',
      svg: 'svg/icon-checkmark-circled.svg'
    }
  }, {
    id: 20,
    item: {
      name: 'Close Blue',
      svg: 'svg/icon-close-blue.svg'
    }
  }, {
    id: 21,
    item: {
      name: 'Close',
      svg: 'svg/icon-close.svg'
    }
  }, {
    id: 22,
    item: {
      name: 'Cloud',
      svg: 'svg/icon-cloud.svg'
    }
  }, {
    id: 23,
    item: {
      name: 'Cloud 2',
      svg: 'svg/icon-cloud-2.svg'
    }
  }, {
    id: 24,
    item: {
      name: 'Cog',
      svg: 'svg/icon-cog.svg'
    }
  }, {
    id: 25,
    item: {
      name: 'Colon',
      svg: 'svg/icon-colon.svg'
    }
  }, {
    id: 26,
    item: {
      name: 'Copy',
      svg: 'svg/icon-copy.svg'
    }
  }, {
    id: 27,
    item: {
      name: 'Cloud',
      svg: 'svg/icon-cloud-2.svg'
    }
  }, {
    id: 28,
    item: {
      name: 'Delete',
      svg: 'svg/icon-delete.svg'
    }
  }, {
    id: 29,
    item: {
      name: 'Docs',
      svg: 'svg/icon-docs.svg'
    }
  }, {
    id: 30,
    item: {
      name: 'Download',
      svg: 'svg/icon-download.svg'
    }
  }, {
    id: 31,
    item: {
      name: 'Edit',
      svg: 'svg/icon-edit.svg'
    }
  }, {
    id: 32,
    item: {
      name: 'Email',
      svg: 'svg/icon-email.svg'
    }
  }, {
    id: 33,
    item: {
      name: 'Error',
      svg: 'svg/icon-error.svg'
    }
  }, {
    id: 34,
    item: {
      name: 'Expand',
      svg: 'svg/icon-expand.svg'
    }
  }, {
    id: 35,
    item: {
      name: 'Export',
      svg: 'svg/icon-export.svg'
    }
  }, {
    id: 36,
    item: {
      name: 'External Blue',
      svg: 'svg/icon-external-blue.svg'
    }
  }, {
    id: 37,
    item: {
      name: 'External Grey',
      svg: 'svg/icon-external-grey.svg'
    }
  }, {
    id: 38,
    item: {
      name: 'External',
      svg: 'svg/icon-external.svg'
    }
  }, {
    id: 39,
    item: {
      name: 'Feedback',
      svg: 'svg/icon-feedback.svg'
    }
  }, {
    id: 40,
    item: {
      name: 'Filter',
      svg: 'svg/icon-filter.svg'
    }
  }, {
    id: 41,
    item: {
      name: 'Folded Map',
      svg: 'svg/icon-folded-map.svg'
    }
  }, {
    id: 41,
    item: {
      name: 'Folder',
      svg: 'svg/icon-folder.svg'
    }
  }, {
    id: 42,
    item: {
      name: 'Gear',
      svg: 'svg/icon-gear.svg'
    }
  }, {
    id: 43,
    item: {
      name: 'Hide',
      svg: 'svg/icon-hide.svg'
    }
  }, {
    id: 44,
    item: {
      name: 'Home',
      svg: 'svg/icon-home.svg'
    }
  }, {
    id: 45,
    item: {
      name: 'Info Help',
      svg: 'svg/icon-info-help.svg'
    }
  }, {
    id: 45,
    item: {
      name: 'Info',
      svg: 'svg/icon-info.svg'
    }
  }, {
    id: 46,
    item: {
      name: 'Key',
      svg: 'svg/icon-key.svg'
    }
  }, {
    id: 47,
    item: {
      name: 'Link',
      svg: 'svg/icon-link.svg'
    }
  }, {
    id: 48,
    item: {
      name: 'List View',
      svg: 'svg/icon-list-view.svg'
    }
  }, {
    id: 49,
    item: {
      name: 'Lock',
      svg: 'svg/icon-lock.svg'
    }
  }, {
    id: 50,
    item: {
      name: 'Logout',
      svg: 'svg/icon-logout.svg'
    }
  }, {
    id: 51,
    item: {
      name: 'Markdown',
      svg: 'svg/icon-markdown.svg'
    }
  }, {
    id: 52,
    item: {
      name: 'Phone',
      svg: 'svg/icon-phone.svg'
    }
  }, {
    id: 53,
    item: {
      name: 'Plus Open',
      svg: 'svg/icon-plus-open.svg'
    }
  }, {
    id: 54,
    item: {
      name: 'Product Trigger',
      svg: 'svg/icon-product-trigger.svg'
    }
  }, {
    id: 55,
    item: {
      name: 'Read Only',
      svg: 'svg/icon-read-only.svg'
    }
  }, {
    id: 56,
    item: {
      name: 'Refresh',
      svg: 'svg/icon-refresh.svg'
    }
  }, {
    id: 57,
    item: {
      name: 'Save',
      svg: 'svg/icon-save.svg'
    }
  }, {
    id: 58,
    item: {
      name: 'Search',
      svg: 'svg/icon-search-blue.svg'
    }
  }, {
    id: 59,
    item: {
      name: 'Secure',
      svg: 'svg/icon-secure.svg'
    }
  }, {
    id: 60,
    item: {
      name: 'Share',
      svg: 'svg/icon-share.svg'
    }
  }, {
    id: 61,
    item: {
      name: 'Shield',
      svg: 'svg/icon-shield.svg'
    }
  }, {
    id: 62,
    item: {
      name: 'Sort Down',
      svg: 'svg/icon-sort-down.svg'
    }
  }, {
    id: 63,
    item: {
      name: 'Sort Up',
      svg: 'svg/icon-sort-up.svg'
    }
  }, {
    id: 64,
    item: {
      name: 'Sort Unsorted',
      svg: 'svg/icon-sort-unsorted.svg'
    }
  }, {
    id: 65,
    item: {
      name: 'Sort Ticket',
      svg: 'svg/icon-ticket.svg'
    }
  }, {
    id: 65,
    item: {
      name: 'Sort Trash',
      svg: 'svg/icon-trash.svg'
    }
  }, {
    id: 65,
    item: {
      name: 'Sort User',
      svg: 'svg/icon-user.svg'
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
