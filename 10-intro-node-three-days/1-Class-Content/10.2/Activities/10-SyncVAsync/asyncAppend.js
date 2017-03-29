// This file is written in this funny way so you can better visualize how Node's asynchronous pattern works.
// Because Node is asynchronous, code will run seemingly out of order.
// Pay attention to how the variable "secondNumber" gets printed.
// It doesn't wait for the append to complete. It runs immediately.
// This is purposeful. If you aren't careful, this will trip you up. Be mindful of the async nature!

var fs = require("fs");

var textFile = process.argv[2];
var number = 0;

fs.readFile(textFile, "utf8", function(err, data) {
  // If there's an error reading the textFile, we log it and return immediately
  if (err) {
    return console.log(err);
  }
  var secondNumber = 0;
  // Inside of the readFile callback, we use the appendFile function
  // The first parameter is the name of the text file to save to
  // The second parameter is the data we want to write as a string
  // The third parameter is the callback function to be called when appendFile is finished
  // For more info, see the docs: https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
  fs.appendFile("written.txt", "Hello Kitty", function(err) {
    // If there was an error, we log it and return immediately
    if (err) {
      return console.log(err);
    }
    number = 5;
    secondNumber = 2;
    // number should be 5 here
    console.log(number);

    // log that we saved the info successfully. we know that
    // because no error was encountered, or we would have returned above
    console.log("SAVED");

  });
  // second number should be 0 here
  console.log(secondNumber);
});
// number should be 0 here
console.log(number);
