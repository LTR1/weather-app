// My Scripts
// Spokane
$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
        $('.spokane .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>Slow or No Connection</p>');
    }
  
  });


$.simpleWeather({
    location: 'seattle',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp + 'F');
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
        $('.seattle .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>Slow or No Connection</p>');
    }
  
  });