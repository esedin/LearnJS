var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

var params = {
  q: '#nodejs',
  count: 10,
  result_type: 'recent',
  lang: 'en'
}

T.get('search/tweets', params, function(err, data, response) {
  if(!err){
     for(let i = 0; i < data.statuses.length; i++){
        console.log(data.statuses[i].text);
     }
  } else {
    console.log(err);
  }
})