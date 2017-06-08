var inquirer = require("inquirer");

// Basic Card function
var BasicCard = function(front, back) {
    this.front = front,
    this.back = back,
    this.printBasic = function () {
        console.log("Front: " + this.front
                    + "\nBack: " + this.back);
    }
}

// Cloze Card function
var ClozeCard = function(text, cloze) {
    this.text = text,
    this.cloze = cloze,
    partial = text.replace(cloze, "..."),
    this.printCloze = function () {
        console.log("Full text: " + this.text
                    + "\Cloze text: " + this.cloze
                    + "\Partial text: " + partial);
    }
}

// Prompt the user to put whether or not they want to have a basic or cloze card.
inquirer.prompt([{
    type: "list",
    name: "cardtype",
    message: "Basic or Cloze card?",
    choices: ["basic" , "cloze"] 
}].then(function(answers) {
        if (choices[0]) {
            var newBasic = new BasicCard(answers.front, answers.back);
            BasicCard.printBasic();
        }
        else if (choices[1]) {
            var newCloze = new ClozeCard(answers.text, answers.cloze);
            ClozeCard.printCloze();
        }
        if (err) throw err
    }
));