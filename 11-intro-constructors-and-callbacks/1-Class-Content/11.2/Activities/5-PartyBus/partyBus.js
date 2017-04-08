// requiring our Dud constructor function we exported from dud.js
var Dud = require("./dud.js");

// constructor function for creating partyBus objects
var PartyBus = function(driverName, startLocation, destination) {
  // this.duds will hold all of our dud objects
  this.duds = [];
  this.driverName = driverName;
  this.startLocation = startLocation;
  this.destination = destination;
  // a method that creates a dud object from the constructor function we required
  // on line 1 and then pushes the new dud object to the this.duds array
  this.addDud = function(g, n, r) {
    this.duds.push(new Dud(g, n, r));
  };
};

// exporting the PartyBus constructor which we will use in main.js
module.exports = PartyBus;
