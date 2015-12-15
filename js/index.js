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
      svg: 'svg/icon-cloud.svg'
    }
  }, {
    id: 2,
    item: {
      name: 'Book',
      svg: 'svg/icon-book.svg'
    }
  }, {
    id: 3,
    item: {
      name: 'Brush',
      svg: 'svg/icon-brush.svg'
    }
  }, {
    id: 4,
    item: {
      name: 'Admin',
      class: '.icon-admin',
      svg: 'svg/icon-admin.svg'
    }
  }, {
    id: 5,
    item: {
      name: 'Beta',
      svg: 'svg/icon-beta.svg'
    }
  }, {
    id: 6,
    item: {
      name: 'Attachment',
      svg: 'svg/icon-attachment.svg'
    }
  }, {
    id: 7,
    item: {
      name: 'API',
      svg: 'svg/icon-api.svg'
    }
  }, {
    id: 8,
    item: {
      name: 'Link',
      svg: 'svg/icon-link.svg'
    }
  }, {
    id: 9,
    item: {
      name: 'Calendar',
      svg: 'svg/icon-calendar.svg'
    }
  }, {
    id: 10,
    item: {
      name: 'Check',
      svg: 'svg/icon-check.svg'
    }
  }, {
    id: 11,
    item: {
      name: 'Card View',
      svg: 'svg/icon-card-view.svg'
    }
  }, {
    id: 12,
    item: {
      name: 'List View',
      svg: 'svg/icon-list-view.svg'
    }
  }, {
    id: 13,
    item: {
      name: 'Caret Circle',
      svg: 'svg/icon-caret-circle.svg'
    }
  }, {
    id: 14,
    item: {
      name: 'Checkmark Circled',
      svg: 'svg/icon-checkmark-circled.svg'
    }
  }, {
    id: 15,
    item: {
      name: 'Close',
      svg: 'svg/icon-close.svg'
    }
  }, {
    id: 16,
    item: {
      name: 'Cog',
      svg: 'svg/icon-cog.svg'
    }
  }, {
    id: 17,
    item: {
      name: 'Edit',
      svg: 'svg/icon-edit.svg'
    }
  }, {
    id: 18,
    item: {
      name: 'Email',
      svg: 'svg/icon-email.svg'
    }
  }, {
    id: 19,
    item: {
      name: 'Expand',
      svg: 'svg/icon-expand.svg'
    }
  }, {
    id: 20,
    item: {
      name: 'External',
      svg: 'svg/icon-external.svg'
    }
  }, {
    id: 21,
    item: {
      name: 'Folded Map',
      svg: 'svg/icon-folded-map.svg'
    }
  }, {
    id: 22,
    item: {
      name: 'Folder',
      svg: 'svg/icon-folder.svg'
    }
  }, {
    id: 23,
    item: {
      name: 'Key',
      svg: 'svg/icon-key.svg'
    }
  }, {
    id: 24,
    item: {
      name: 'Phone',
      svg: 'svg/icon-phone.svg'
    }
  }, {
    id: 25,
    item: {
      name: 'Shield',
      svg: 'svg/icon-shield.svg'
    }
  }, {
    id: 26,
    item: {
      name: 'Trash',
      svg: 'svg/icon-trash.svg'
    }
  }, {
    id: 27,
    item: {
      name: 'User',
      svg: 'svg/icon-user.svg'
    }
  }, {
    id: 28,
    item: {
      name: 'Disable',
      svg: 'svg/icon-disable.svg'
    }
  }, {
    id: 29,
    item: {
      name: 'Caret',
      svg: 'svg/icon-caret.svg'
    }
  }, {
    id: 30,
    item: {
      name: 'Lock',
      svg: 'svg/icon-lock.svg'
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
