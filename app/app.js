var app = angular.module("MusicApp", ["angular.filter", "ngRoute", "firebase", "angucomplete-alt"]);

//Configure routes for app
app.config(['$routeProvider', function($routeProvider) {
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
}]);

//Whitelist spotify
app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://embed.spotify.com/**'
    ]);
});