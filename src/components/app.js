angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html', 
  
    controller: function(youTube) {
      
      this.videos = []; 
      this.currentVideo = {}; 
      this.service = youTube;
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.searchResults = (query) => {
        this.videos = this.service.search(query, function(data) {
          console.log(data);
          this.videos = data;
          this.currentVideo = this.videos[0];
        }.bind(this));
      };
      
      this.result = (query) => {
        this.searchResults(query);
      };
      
      this.$onInit = function() {
        this.searchResults('cats');
      };
      
      // this.load = function() {
      //   this.searchResults('hack reactor');
      // };
     
      // this.searchResults('hack reactor'); 
    }

  });
