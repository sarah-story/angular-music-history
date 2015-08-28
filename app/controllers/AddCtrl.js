//Controller for add songs input in navbar

app.controller("AddCtrl", function($scope, $firebaseArray) {

  //Get song array

  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs");

  $scope.songs = $firebaseArray(songRef);

  //$scope.selectedSong comes from selected object in dropdown autocomplete

  $scope.selectedSong = {};

  //When add button is clicked
  $scope.addSong = function() {

    //Add song to firebase array
    $scope.songs.$add({
      album: $scope.selectedSong.originalObject.album.name,
      artist: $scope.selectedSong.description,
      title: $scope.selectedSong.title, 
      image: $scope.selectedSong.image,
      spotifyTrackId: $scope.selectedSong.originalObject.id,
      spotifyAlbumId: $scope.selectedSong.originalObject.album.id,
      spotifyArtistId: $scope.selectedSong.originalObject.artists[0].id
    });

    //Clear input box
    $scope.$broadcast('angucomplete-alt:clearInput');

  };
});