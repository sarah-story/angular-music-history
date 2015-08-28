app.controller("DetailCtrl", function($scope, $routeParams, $firebaseObject) {
  
  var songRef = new Firebase("https://blistering-inferno-3867.firebaseio.com/songs/"+$routeParams.id);

  $scope.song = $firebaseObject(songRef);
  $scope.song.$loaded().then(function () {
    $scope.spotifyTrackSrc = "https://embed.spotify.com/?uri=spotify:track:" + $scope.song.spotifyTrackId;
    $scope.spotifyAlbumSrc = "https://embed.spotify.com/?uri=spotify:album:" + $scope.song.spotifyAlbumId;
    $scope.spotifyArtistSrc = "https://embed.spotify.com/?uri=spotify:artist:" + $scope.song.spotifyArtistId;
  });
  
});