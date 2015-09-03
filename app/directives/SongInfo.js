import * as angular from "angular";

function SongInfo() {
  return {
    restrict: "E", // Restrict directive to element
    scope: {
      song: "="
    },
    templateUrl: "partials/song-info.html"
  };
};

export default SongInfo;
