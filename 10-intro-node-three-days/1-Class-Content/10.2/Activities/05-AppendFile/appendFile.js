// As always, we grab the fs package to handle read/write
var fs = require("fs");

// We then store the textfile filename given to us from the command line
var textFile = process.argv[2];

// We then append the contents "Hello Kitty" into the file
// If the file didn't exist then it gets created on the fly.
fs.appendFile(textFile, "Hello Kitty", function(err) {

  // If an error was experienced we say it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});


