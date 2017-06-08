
var liri  = function() {

var fs = require("fs");
var client = require("./keys.js");
var song = require("spotify");

// What Each Command Should Do
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.
if ("my-tweets" === process.argv[3]) {
    var tweets = function () {

        if (err) {
            console.log("Error!");
        }

        else {
            var params = {
                    status: process.argv[3],
                    user: "Donald Trump"
            }

            client.get("statuses/user_timeline", params, function(error, tweets, response) {
                for (var i = 1; i = 20; i++) {
                    console.log("Tweet #" + i + ": " + tweet[i] + ".");
                    console.log("-----------------------------------");
                }
            }
        }
    }   
}

else if (process.argv[3] === "spotify-this-song") {
    var spotify = function () {
        var params = {
            type: "track",
            query: process.argv[4],
        }

        song.search(params, function (error, params) {
            if (err) {
                console.log("Error!");
            }
            else {
                console.log("Artist: " + +".");
                console.log("Song: " + + ".");
                console.log("Album: " + + ".");
                console.log("Link: " + + ".");
            }
        })
    }
}



// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
else if ("spotify-this-song" === process.argv[3]) {

    var spotify = function () {
        spotify.search({
            type: "track", 
            query: process.argv[4], 
        })

        song.search(params, function (error, data) {

            if (err) {
                console.log("Error!");
            }

            else {
                console.log("Artist: " + );
                console.log("Song: " + );
                console.log("Album Name: " + );
                console.log("Link: " + );
            }

        })


            
        }
    }

// The song's name
songName

// A preview link of the song from Spotify

// The album that the song is from

// if no song is provided then your program will default to
// "The Sign" by Ace of Base




// node liri.js movie-this '<movie name here>'
else if (movie-this === process.argv[3];


// This will output the following information to your terminal/bash window:
//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
//    * Rotten Tomatoes Rating.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
// It's on Netflix!


// node liri.js do-what-it-says
do-what-it-says


// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.
}