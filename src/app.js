var UI = require('ui');
var ajax = require('ajax');
var URL = "http://space.visionsandviews.net/spaceapi/spaceapi.json";
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
    console.log(data.state.open);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
});

// Display the Card
card.show();