// Make Foundation Go!
//$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

  //var zip = '99004';
  //console.log(zip);

  $.simpleWeather({
    
    /*
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.cheney .temp').text(temp);
      $('.cheney .city').text(city);*/


    location: '99004',
    unit: 'F',
    
    success: function(weather) {
      
      

      // Get & Store Weather Data
      html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      
      var temp, tomHi, tomLo, cityAndState, tomForecast, conditionCode; 

      temp = weather.temp;
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ', ' + weather.region;
      tomForecast = weather.tomorrow.forecast;
      conditionCode = weather.code;

        console.log(conditionCode);

      //console.log(cityAndState);

      // Display Weather
      $('.cheney .temp').text(temp);
      $('.cheney .tomHi').text(tomHi);
      $('.cheney .tomLo').text(tomLo);
      $('.cheney .cityAndState').text(cityAndState);
      $('.cheney .tomForecast').text(weather.tomorrow.forecast);
      $('body').addClass('bg' + conditionCode);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });

$.simpleWeather({


    location: '98101',
    unit: 'F',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      
      var temp, tomHi, tomLo, cityAndState, tomForecast, conditionCode; 

      temp = weather.temp;
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ', ' + weather.region;
      tomForecast = weather.tomorrow.forecast;
      conditionCode = weather.code;

        console.log(conditionCode);

      //console.log(cityAndState);

      // Display Weather
      $('.seattle .temp').html(temp);
      $('.seattle .tomHi').html(tomHi);
      $('.seattle .tomLo').html(tomLo);
      $('.seattle .cityAndState').html(cityAndState);
      $('.seattle .tomForecast').html(weather.tomorrow.forecast);
      $('body').addClass('bg' + conditionCode);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// 1. Check for Geolocation
// REF: http://codepen.io/fleeting/pen/Idsaj
// Browser support geolocation?  
  if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function

// REF: http://foundation.zurb.com/docs/
// REF: http://simpleweatherjs.com/

// On click button, get zip, then run Simple Weather
$('button').on('click', function() {
  
  // 1. Get & store entered zipcode
  var zipcode = $('#getWeather').val();
  
  // 2. Pass weather into _simpleWeather()_ object
  $.simpleWeather({
    
    location: zipcode,
  
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      
      // Output to hooks in HTML
      $('.temp').text(temp);
      $('.city').text(city);

      // See console for all properties of object
      console.log(weather);
    },
  
    error: function(error) {
      $('body').html('<p>' + error + '</p>');
    }
  
  });
  
  // 3. Reset input value
  $('#getWeather').val('');
  
});


  console.log('Page Loaded. Lets Do this!');

});