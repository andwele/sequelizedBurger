
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "avissony",
    database: "bamazon"
});

var response = function () {
    connection.query("SELECT * FROM products", function(error, respnse) {
        if (err) throw err;


    })
}

var answer = function (answer) {
    inquirer.prompt([{
        type: "input",
        name: "productID",
        message: "What is the ID of the product that you want to purchase. "
    }]).then(function(id) {
        for (var i = 0; i < answer.length, i++) {
            if (answer[i].item_id == id.productID) {
                var product = id.choice;

                inquirer.prompt([{
                    type: "input",
                    name: "quantity",
                    message: "How many do you want?"
                }]).then(function(id) {
                    if (answer[i].stock_quantity - id.quantity > 0) {
                        connection.query(
                            "UPDATE products SET stock_quantity=" + answer[i].stock_quantity - id.quantity) +
                            "WHERE product_name = " + product)
                    }
                }
            })
        }
