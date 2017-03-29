// Grabs the bands variables
var bands = require("./bands.js");

// Gets all of myBands bands from the bands file.
var bandList = bands.myBands;
  
// Grabs the genre information
if (process.argv[2]) {
  var genre = process.argv[2];
}

for (var key in bandList) {

  // If the genre matches the key then print that band.
  if (key === genre || genre === undefined) {
    console.log("A " + key + " band is " + bandList[key] + ".");
  }
}

// Example:
// User Input: node runBonus rap
// Output: A rap band is Run DMC.

