// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer.prompt([

  // Here we create a basic text prompt.
  {
    type: "input",
    message: "What is your name?",
    name: "name"
  },

  // Here we create a basic password-protected text prompt.
  {
    type: "password",
    message: "Set your password",
    name: "password"
  },

  // Here we give the user a list to choose from.
  {
    type: "list",
    message: "Which Pokemon do you choose?",
    choices: ["Bulbasaur", "Squirtle", "Charmander"],
    name: "pokemon"
  },

  // Here we ask the user to confirm.
  {
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true

  }

// Once we are done with all the questions... "then" we do stuff with the answers
// In this case, we store all of the answers into a "user" object that inquirer makes for us.
]).then(function(user) {


  // If we log that user as a JSON, we can see how it looks.
  console.log(JSON.stringify(user, null, 2));

  // If the user confirms, we displays the user's name and pokemon from the answers.
  if (user.confirm) {

    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.name);
    console.log("Your " + user.pokemon + " is ready for battle!");
    console.log("");
    console.log("==============================================");

  // If the user does not confirm, then a message is provided and the program quits.
  }

  else {

    console.log("");
    console.log("");
    console.log("That's okay " + user.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }

});
