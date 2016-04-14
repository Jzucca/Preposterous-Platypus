angular.module('platypus', [
  'ngRoute',
  'platypus.auth',
  'platypus.services',
  'platypus.food-feed'
  ])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when('/add', {
      templateUrl: 'app/add/add.html',
      controller: 'AddController'
    })
    .when('/feed', {
      templateUrl: 'app/channels/food/feed/feed.html',
      controller: 'FoodFeedController'
    })
    .when('/user/dashboard', {
      templateUrl: 'app/user/dashboard.html',
      controller: 'UserController'
    })
    .when('/user/settings', {
      templateUrl: 'app/user/settings.html',
      controller: 'UserController'
    })
    .otherwise({
      redirectTo: 'app/auth/signin.html'
    });
});