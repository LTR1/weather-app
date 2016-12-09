// My Scripts
var max = 3;
var randNum = Math.floor(Math.random() * max);
console.log(randNum);
//Store Greetings
var msg0 = 'Hola';
var msg1 = 'Howdy';
var msg2 = 'Sup!';
//Show Greetings
$('h1 span').text(eval('msg' + randNum));
//store background classes
var bg0 = 'bg0';
var bg1 = 'bg1';
var bg2 = 'bg2';
var degree = 0;
//change background
$('body').addClass('bg' + randNum);
if ('geolocation' in navigator) {
    $('.geo button').show();
}
else {
    $('.geo button').hide();
    $('.geo').prepend('<p>Geolocation Not Supported</p>');
}
// On Click, Get Geolocation, Call Weather Function
$('.geo button').click(function () {
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function (position) {
        getWeather(position.coords.latitude + ',' + position.coords.longitude);
    });
});
// Get geolocated weather
var getWeather = function (location, degree) {
    $.simpleWeather({
        location: location
        , degree: degree
        , degree: 24
        , woeid: ''
        , unit: 'f'
        , success: function (weather) {
            // Display Data
            console.log(degree);
            $('.geo .temp').text(weather.temp + 'F');
            $('.geo .city').text(weather.city);
            $('.geo img').attr('src', weather.image);
            $('.geo .title').text(weather.title);
            // Entire weather object
            console.log();
        }
        , error: function (error) {
            // Show if weather cannot be retreived
        }
    });
};