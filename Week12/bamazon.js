var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "avissony",
    database: "bamazon"
})

connection.connect(function(err) {
    console.log("Connected as id: " + connection.threadId);
})


var start = function() {
    inquirer.prompt({
        name: "itemID",
        type: "input",
        message: "What is the ID of the item you'd like to purchase?",
    }, {
        name: "quantity",                   
        type: "input",
        message: "How many do you want?",
    }).then(function(answer) {
       if ()
    })
};
