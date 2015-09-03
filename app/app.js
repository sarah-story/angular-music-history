define([
  'angular',
  'angularFilter',
  'firebase',
  'angucompleteAlt',
  'ngRoute',
  'es6!controllers/AddCtrl',
  'es6!controllers/DetailCtrl',
  'es6!controllers/SongCtrl',
  'es6!directives/SongInfo'
], function(angular, angularFilter, _firebase, angucompleteAlt, ngRoute, AddCtrl, DetailCtrl, SongCtrl, SongInfo) {
  // Declare app level module which depends on views, and components
  return angular.module('MusicApp', [
    'angular.filter', 'angucomplete-alt', "ngRoute", "firebase", 
  ]).config(['$routeProvider', '$sceDelegateProvider', function($routeProvider, $sceDelegateProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/song-list.html',
      controller: 'SongCtrl'
    }).when('/new', {
      templateUrl: 'partials/add-song.html',
      controller: 'AddCtrl'
    }).when('/song/:id', {
      templateUrl: 'partials/song-detail.html',
      controller: 'DetailCtrl'
    }).when('/album/:id', {
      templateUrl: 'partials/album-detail.html',
      controller: 'DetailCtrl'
    }).when('/artist/:id', {
      templateUrl: 'partials/artist-detail.html',
      controller: 'DetailCtrl'
    }).otherwise({
      redirectTo: '/'
    });

    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://embed.spotify.com/**'
    ]);
  }]).controller('SongCtrl',SongCtrl)
  .controller('AddCtrl',AddCtrl)
  .controller('DetailCtrl',DetailCtrl)
  .directive('songInfo',SongInfo);
});
