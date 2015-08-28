//Controller for all three detail views: track, artist, album

app.controller("DetailCtrl", function($scope, $routeParams, $firebaseObject) {
  
  //Get individual song object from firebase based on url route
  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs/"+$routeParams.id);

  $scope.song = $firebaseObject(songRef);

  //Once song is loaded, declare src for the spotify iframe
  $scope.song.$loaded().then(function () {
    $scope.spotifyTrackSrc = "https://embed.spotify.com/?uri=spotify:track:" + $scope.song.spotifyTrackId;
    $scope.spotifyAlbumSrc = "https://embed.spotify.com/?uri=spotify:album:" + $scope.song.spotifyAlbumId;
    $scope.spotifyArtistSrc = "https://embed.spotify.com/?uri=spotify:artist:" + $scope.song.spotifyArtistId;
  });
  
});