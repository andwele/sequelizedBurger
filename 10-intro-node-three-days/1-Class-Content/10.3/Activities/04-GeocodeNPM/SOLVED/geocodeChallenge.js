// Instructions:
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide ANY sort of location identifier: ex: "151 Sip Ave Jersey City, NJ", "Austin, TX", "The White House", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format.

// ===================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");

// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i = 2; i < nodeArgs.length; i++) {

  // Build a string with the address.
  address = address + " " + nodeArgs[i];
}

// Log the address we built
console.log("Searching for" + address);

// Then use the Google Geocoder to geocode the address
geocoder.geocode(address, function(err, data) {

  // Then console log the result and stringify it.
  // Note the argument of "2" being included in the JSON stringify. This makes the JSON output pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
});

