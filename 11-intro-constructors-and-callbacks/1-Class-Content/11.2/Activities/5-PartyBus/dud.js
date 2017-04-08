// constructor function for creating dud objects
var Dud = function(gender, dudName, coolnessScale) {
  this.gender = gender;
  this.dudName = dudName;
  this.coolnessScale = coolnessScale;
  // prints out a different message depending on whether dud is male or female
  this.dudeOrDudess = function() {
    if (this.gender === "female") {
      console.log("I'm a dudess. Sup?");
    }
    else {
      console.log("I'm a dude. Are there any dudesses around?");
    }
  };
};

// exporting our Dud constructor.We will require it in partyBus.js
module.exports = Dud;
