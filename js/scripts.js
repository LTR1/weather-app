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

// Get Location

// Get and store Geo Location lat/long coordinates
if ('geolocation' in navigator) {

   $('.geo button').show(); 

} else {
  
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}

// On Click, Get Geolocation, Call Weather Function
$('.geo button').click( function() {
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
    // Display Data
      $('.geo .temp').text(weather.temp + 'F');
      $('.geo .city').text(weather.city);
      $('.geo img').attr('src', weather.image);
        $('.geo .title').text(weather.title);
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};
