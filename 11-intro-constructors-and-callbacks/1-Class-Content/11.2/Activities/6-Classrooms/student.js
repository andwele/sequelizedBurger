// constructor function for creating student objects
var Student = function(name, favoriteSub, gpa) {
  this.name = name;
  this.favoriteSub = favoriteSub;
  this.gpa = gpa;
};

// exporting our Student constructor
module.exports = Student;
