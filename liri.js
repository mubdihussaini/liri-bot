var keys = require("./keys.js").twitterKeys;
var keysSpot=require("./keys.js").spotifyKeys;
var request = require("request")
var twitter = require("twitter")
var spotify = require('node-spotify-api')
var client = new twitter(keys)
var command = process.argv[2];

if (command === "my-tweets")
{

    var params = {
        screen_name: 'BillNye'
    };
    client.get('statuses/user_timeline', params, function(error, tweets, response)
              {
                if (!error)
                      {
                    console.log(tweets[1].text);
                       var tweetNum = 1;
                       for (var i = 0; i, tweets.length; i++)
                          {
                              console.log(tweetNum = ":" + tweets[i].text);
                    //  tweetNum == ;
                          }

                       }
                  }
                  )
};

if (command === "spotify-this-song")
{

var spotify = new spotify({
  id:   '3a6c7566305e4f7b8f3cea3f07b96fa1',
  secret:'36a2c886e83c461bb078777ca7412ede'
});

spotify.search({ type: 'track', query: 'The Sign' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log(data);
});
};

if (command === "movie-this" request)

          request('http://www.omdbapi.com/?apikey=[40e9cece]&', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
          });
