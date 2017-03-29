// This file is written in this funny way so you can better visualize how Node's asynchronous pattern works.
// Because Node is asynchronous, code will run seemingly out of order.
// Pay attention to how the variable "secondNumber" gets printed.
// Unlike the asynchronous example, it waits until appendFileSync completes to print
// This is purposeful. If you aren't careful, this will trip you up. Be mindful of the async nature!

var fs = require("fs");

var textFile = process.argv[2];
var number = 0;

fs.readFile(textFile, "utf8", function(err, data) {
  // If there was an error reading the file, we log it and return immediately
  if (err) {
    return console.log(err);
  }
  // number should still be 0 here
  console.log(number);
  var secondNumber = 0;
  // Inside of the readFile callback, we use the appendFileSync function. This version of appendFile is synchronous
  // The first parameter is the name of the text file to save to
  // The second parameter is the data we want to write as a string
  // The third parameter is the callback function to be called when appendFile is finished
  // For more info, see the docs: https://nodejs.org/api/fs.html#fs_fs_appendfile_file_data_options_callback
  number = 5;
  secondNumber = 2;
  fs.appendFileSync("written.txt", "Hello Kitty");
  // log that we saved the info successfully. we know this
  // because no error was encountered, or we would have returned above
  console.log("SAVED");
  // secondNumber should be 2 here
  console.log(secondNumber);
});
// number is still 0 here
console.log("number", number);
