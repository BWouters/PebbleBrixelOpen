var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');
var splashWindow = new UI.Window(); 
// Text element to inform user
var text = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  text:'Downloading space data...',
  font:'GOTHIC_28_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();
var card = new UI.Card({
  title:'Weather',
  subtitle:'Fetching...'
}); 
var URL = "http://space.visionsandviews.net/spaceapi/admin/";
function loadData(){
  ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
       var state = "";
    if(data.state.open === false){
   state = "closed";
    }else{
       state = "open";
    }
    card = new UI.Card({
        title:'Brixel',
        subtitle:'The space is '+state
      });
    splashWindow.hide();
    
    card.show();
    console.log('Successfully fetched weather data!');
    console.log(data.state.open);
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
}
loadData();
// Display the Card
//