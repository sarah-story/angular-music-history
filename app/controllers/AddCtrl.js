import * as angular from "angular";
import * as _firebase from "firebase";
import * as angularfire from "angularfire";

function AddCtrl($scope, $firebaseArray) {

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  $scope.selectedSong = {};

  $scope.addSong = function() {
    console.log('click');
    console.log($scope.selectedSong);
    $scope.songs.$add({
      album: $scope.selectedSong.originalObject.album.name,
      artist: $scope.selectedSong.description,
      title: $scope.selectedSong.title, 
      image: $scope.selectedSong.image,
      spotifyTrackId: $scope.selectedSong.originalObject.id,
      spotifyAlbumId: $scope.selectedSong.originalObject.album.id,
      spotifyArtistId: $scope.selectedSong.originalObject.artists[0].id
    });
    $scope.$broadcast('angucomplete-alt:clearInput');
  };
};

AddCtrl.$inject = ['$scope', '$firebaseArray'];

export default AddCtrl;