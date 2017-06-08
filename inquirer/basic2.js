
var inquirer = require("inquirer");

inquirer.prompt([

   question1 = {
        type: "input",
        message: "Enter your name: ",
        name: "username"
    },

    question2 = {
        type: "password",
        message: "Enter your password here ",
        name: "password"
    },

    question3 = {
        type:"list",
        message: "What is your favorite color?",
        choices: ["white", "black", "yellow", "red"],
        name: "colors"
    },

    question4 = {
        type: "confirm",
        message: "Are you certain?",
        name: "confirm",
        default: "true" 
    },

    question = {
        type: "checkbox",
        message: "What are you top 3 favorite colors?"
        choices: ["white", "black", "brown", "yellow", "orange", "red", "tan"],
        name: "colorChoices"
    }


questions = [question1, question2],

])