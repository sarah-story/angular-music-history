
import * as angular from "angular";
import * as _firebase from "firebase";
import * as angularfire from "angularfire";
import * as ngRoute from "ngRoute";

function AddCtrl($scope, $firebaseObject, $routeParams) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs/"+$routeParams.id);

  $scope.song = $firebaseObject(songRef);

  //Once song is loaded, declare src for the spotify iframe
  $scope.song.$loaded().then(function () {
    $scope.spotifyTrackSrc = "https://embed.spotify.com/?uri=spotify:track:" + $scope.song.spotifyTrackId;
    $scope.spotifyAlbumSrc = "https://embed.spotify.com/?uri=spotify:album:" + $scope.song.spotifyAlbumId;
    $scope.spotifyArtistSrc = "https://embed.spotify.com/?uri=spotify:artist:" + $scope.song.spotifyArtistId;
  });

};

AddCtrl.$inject=['$scope', '$firebaseObject', '$routeParams'];

export default AddCtrl;
  
