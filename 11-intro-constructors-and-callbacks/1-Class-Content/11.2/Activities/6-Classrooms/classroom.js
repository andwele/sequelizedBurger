// requiring our Student module exported from student.js
var Student = require("./student.js");

// constructor function for creating classroom objects
var Classroom = function(profName, roomNum) {
  // this.students will hold all of our student objects
  this.students = [];
  this.numStudents = 0;
  this.profName = profName;
  this.roomNum = roomNum;
  // a method that creates a student using our Student constructor.
  // It then pushes the new student object to this.students and updates this.numStudents
  this.addStudent = function(x, y, z) {
    this.students.push(new Student(x, y, z));
    this.numStudents = this.students.length;
  };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Classroom;
