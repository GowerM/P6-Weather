// Make Foundation Go!
//$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

  var zip = '99004';
  //console.log(zip);

  $.simpleWeather({
    
    location: '99004',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      
      var temp, tomHi, tomLo, cityAndState, tomForecast, conditionCode; 

      temp = weather.temp + '<span> F</span>';
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ', ' + weather.region;
      tomForecast = weather.tomorrow.forecast;
      conditionCode = weather.code;

        console.log(conditionCode);

      //console.log(cityAndState);

      // Display Weather
      $('.temp').html(temp);
      $('.tomHi').html(tomHi);
      $('.tomLo').html(tomLo);
      $('.cityAndState').html(cityAndState);
      $('.tomForecast').html(weather.tomorrow.forecast);
      $('body').addClass('bg' + conditionCode);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });



  console.log('Page Loaded. Lets Do this!');

});