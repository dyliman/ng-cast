angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, callback) {  
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          type: 'video',
          part: 'snippet',
          q: query,
          maxResults: 5,
          embeddable: true,
          key: window.YOUTUBE_API_KEY,
        },    
      }).then(function success(data) {
        callback(data.data.items);
      }, function error() {
      });
       
    };
    
  });
