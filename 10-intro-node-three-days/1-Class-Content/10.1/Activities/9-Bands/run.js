// Grabs the bands variables
var bands = require("./bands.js");

// Gets all of myBands bands from the bands file.
var bandList = bands.myBands;

// Loop through band list and print out details
for (var key in bandList) {
  console.log("A " + key + " band is " + bandList[key] + ".");
}
