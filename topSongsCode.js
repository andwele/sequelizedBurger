/*
*Instructions*

• Now that we have learned how to import big collections of data into a server, it is time to put this new knowledge to the test by importing all of the data contained within `TopSongs.csv` into our database.

> • HINT: Remember, bigger datasets require more time to import properly, so be patient
> • HINT: If you feel that the import process is taking far too long, feel free to use `Top1000Songs.csv` instead. We would highly recommend working with the bigger dataset if you can, however.
> • HINT: Take the downtime you have been given to start on the next part of the activity

• With all of your data successfully imported into the database, begin working on a Node console application which will allow you to collect more specialized pieces of data. For example...

> • A query which returns all data for songs sung by a specific artist
> • A query which returns all artists who appear within the top 5000 more than once
> • A query which returns all data contained within a specific range
> • A query which searches for a specific song in the top 5000 and returns the data for it

• HINT: There are some MySQL queries which could make some of these tasks even easier to accomplish. Feel free to look at MySQL’s documentation to find some of them.
*/


var mysql = require("mysql");
var inquirer = require("inquirer");

// Create the connection information for the SQL database.
var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "avissony",
    database: "top_songsDB",
});

// Connect to the MySQL database.
connection.connect(function(err) {
    if (err) throw err;
});

    var start = function() {    
     // Prompt users to...want somthing from the database.
     inquirer.prompt({
         name:"whatChuWantMane",
         type: "rawlist",
         message: "What do you want to know?"
         choices: ["Get Songs from Artist", 
                    "See which artists have more than 1 song in the top 5000",
                    "Get all of the data in a specific range,",
                    "Get the data for a specific song"]
     }).then(function(answer) {
        for (var i = 0; )
     })

     // Get songs from a particular artist. 
     songsByArtist();

     // Get artist names who appear more than once in the top 5000.
     repeatArtists();

     // Get all of the data within a specific range. 
     withinRange();

     // Get the data for a specific song. 
     songData();
    }

function songsByArtist() {

    //Prompt the users to input what artist they want to look up. 
    inquirer.prompt({
        name: "artistChoice",
        type: "text",
        message: "What artists songs do you want information about?"
    }).then(function(answer) {

        // Based on the answer given, return data about the artist.
        connection.query("SELECT * FROM songs", 
            {
                song: answer.song
            }, 
                function(err) {
                    if (err) throw err;

                }
    });
};
 
function repeatArtists() {};

function withinRange() {};

function songData() {};

/*

SOLUTION

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "top_songsdb"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: ["Find songs by artist", "Find all artists who appear more than once",
      "Find data within a specific range", "Search for a specific song"]
  }).then(function(answer) {

    switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;

      case "Find data within a specific range":
        rangeSearch();
        break;

      case "Search for a specific song":
        songSearch();
        break;
    }
  });
};

var artistSearch = function() {
  inquirer.prompt({
    name: "artist",
    type: "input",
    message: "What artist would you like to search for?"
  }).then(function(answer) {
    var query = "SELECT position, song, year FROM top5000 WHERE ?";
    connection.query(query, { artist: answer.artist }, function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
      }
      runSearch();
    });
  });
};

var multiSearch = function() {
  var query = "SELECT artist FROM top5000 GROUP BY artist HAVING count(*) > 1";
  connection.query(query, function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist);
    }
    runSearch();
  });
};

var rangeSearch = function() {
  inquirer.prompt([{
    name: "start",
    type: "input",
    message: "Enter starting position: ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }, {
    name: "end",
    type: "input",
    message: "Enter ending position: ",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }]).then(function(answer) {
    var query = "SELECT position,song,artist,year FROM top5000 WHERE position BETWEEN ? AND ?";
    connection.query(query, [answer.start, answer.end], function(err, res) {
      for (var i = 0; i < res.length; i++) {
        console.log("Position: " + res[i].position + " || Song: " + res[i].song
          + " || Artist: " + res[i].artist + " || Year: " + res[i].year);
      }
      runSearch();
    });
  });
};

var songSearch = function() {
  inquirer.prompt({
    name: "song",
    type: "input",
    message: "What song would you like to look for?"
  }).then(function(answer) {
    console.log(answer.song);
    connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
      console.log("Position: " + res[0].position + " || Song: " + res[0].song
        + " || Artist: " + res[0].artist + " || Year: " + res[0].year);
      runSearch();
    });
  });
};
*/