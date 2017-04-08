// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function used to create programmer objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
}

// creates the printInfo method and applies it to all programmer objects
Programmer.prototype.printInfo = function() {
  console.log("Name: " + this.name + "\nPosition: " + this.position +
  "\nAge: " + this.age + "\nLanguages: " + this.language);
  console.log("---------------");
};

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var programmerArray = [];

var askQuestion = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 5) {
    console.log("NEW PROGRAMMER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is your name?"
      }, {
        name: "position",
        message: "What is your current position?"
      }, {
        name: "age",
        message: "How old are you?"
      }, {
        name: "language",
        message: "What is your favorite programming language?"
      }
    ]).then(function(answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newGuy = new Programmer(
        answers.name,
        answers.position,
        answers.age,
        answers.language);
      // pushes newguy object into our array
      programmerArray.push(newGuy);
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < programmerArray.length; x++) {
      programmerArray[x].printInfo();
    }
  }
};

// call askQuestion to run our code
askQuestion();
