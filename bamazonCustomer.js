var mysql = require("mysql");
var inquire = require("inquire");

// Create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: root,
    password: "avissony",
    database: "bamazon"
});
    
// Connect to the MySQL server and the SQL database
connection.connect (function(err) {
    if (err) throw err;
});

// Display all of the items available for sale. 
// Include the ids, names, and prices of all products for sale.
var start = function() {
    // Query the database for the item list.
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

        // Prompt the user for which product the user would like to buy.
        inquirer.prompt([
            {
                name: "product",
                type: "rawlist",
                choices: function () {
                    var productArray = [];
                    for (var i = 0; i < results.length; i++) {
                        productArray.push(results[i].product_name);
                    }
                    return productArray;
                },
                message: "Which product would you like to purchase? (Enter the id of the product)"
            },
            // Prompt the user to put how many items they want to purchase.
            {
                name: "quantity",
                type: "input",
                message: "How many do you want? (Enter a number)"
            }
        ]).then(function(answer) {
            // Get the id of the chosen item. 
            var item;
            for (var i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.product) {
                    item = results[i];
                }
            }

            // determine whether or not there's enough inventory for the order.
            if ()
            }
        })

    })

        inquirer.prompt({
            name: "",
            type: "text",
            message: "",
            choices: "",
        }).then(function(answer) {
        // Prompt the user to enter the id of the item that they want...
        inquirer.prompt({
            name: "pickProduct",
            type: "text",
            message: "What is the ID (number) of the product that you'd like to purchase?",
            choices: ""
        },
        // And how many items that they want...
            name: "quantity",
            type: "text",
            message: "How many items would you like?" 
        {

        });
    });
};


var inventory = function () {
    // Prompt the user to enter how many of the items that they want.
    inquirer.prompt({
        name: "", // the product that they picked 
        type:"input",
        message: "How many do you want?"
    })
}