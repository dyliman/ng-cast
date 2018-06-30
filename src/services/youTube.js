angular.module('video-player')
  .service('youTube', function($http) {
    
    this.search = function(query, callback) {  
      return $http({
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
        console.log(data);
        return data.items;
      }, function error() {
        console.log('failed');
      });
       
    };
    
  });
