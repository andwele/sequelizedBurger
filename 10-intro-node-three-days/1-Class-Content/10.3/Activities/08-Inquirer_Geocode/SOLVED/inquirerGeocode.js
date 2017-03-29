// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs.
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder and inquirer NPM packages
var geocoder = require("geocoder");
var inquirer = require("inquirer");

// Prompt the user to provide location information.
inquirer.prompt([

  {
    type: "input",
    name: "userInput",
    message: "Which location or landmark would you like to geocode?"
  }

// After the prompt, store the user's response in a variable called location.
]).then(function(location) {

  // console.log(location.userInput);

  // Then use the Google Geocoder to Geocode the address
  geocoder.geocode(location.userInput, function(err, data) {

    console.log(JSON.stringify(data, null, 2));
  });

});
