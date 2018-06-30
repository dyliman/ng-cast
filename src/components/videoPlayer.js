angular.module('video-player')

  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',
    bindings: {
      video: '<'
    },
  
    controller: function() {
      console.log(this.video);
    }

  });
