angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html', 
  
    controller: function($scope, youTube) {
      
      this.videos = window.exampleVideoData;
      this.currentVideo = window.exampleVideoData[0];
      
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (query) => {
        this.videos = youTube.search(query);
        this.currentVideo = this.videos[0];
      };
    }

  });
