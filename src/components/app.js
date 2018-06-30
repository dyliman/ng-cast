angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html', 
  
    controller: function() {
      
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      console.log(this.videos);
      
      this.onClick = function(video) {
        console.log(video);
        this.currentVideo = video;
        console.log(this.currentVideo);
      };
    }

  });
