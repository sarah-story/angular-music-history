import * as angular from 'angular'
import * as angularFilter from 'angularFilter'
import * as _firebase from 'firebase'
import * as angucompleteAlt from 'angucompleteAlt'
import * as ngRoute from 'ngRoute'
import * as AddCtrl from 'es6!controllers/AddCtrl'
import * as SongCtrl from 'es6!controllers/SongCtrl'
import * as DetailCtrl from 'es6!controllers/DetailCtrl'
import * as SongInfo from 'es6!directives/SongInfo'


  // Declare app level module which depends on views, and components
export default angular.module('MusicApp', [
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
