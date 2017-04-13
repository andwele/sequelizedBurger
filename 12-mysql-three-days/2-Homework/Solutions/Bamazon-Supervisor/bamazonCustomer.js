// Requiring our dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Configuring a connection to our database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// Connecting to our database, calling makeTable to print our full list of products
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
  makeTable();
});

function makeTable() {
  // Selecting all products from the products table, displaying them using the
  // console.table package
  connection.query("SELECT * FROM products", function(err, res) {
    console.table(res);
    promptCustomer(res);
  });
}

// Asking the user which product they want to purchase
function promptCustomer(res) {
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What is the id of the product you would like to purchase? [Quit with Q]"
  }]).then(function(answer) {
    // initializing "correct" to be false
    var correct = false;
    // Checking to see if the user wants to quit
    if (answer.choice.toUpperCase() === "Q") {
      process.exit();
    }
    // Here we check to see if the user chose a valid option
    for (var i = 0; i < res.length; i++) {
      // Since the results of our prompts are strings, we need to convert the answer
      // to an integer before checking to see if the user chose a valid product id
      if (res[i].item_id === parseInt(answer.choice)) {
        // If the user chose a valid id, set "correct" to be true and then run the
        // askHowMany function to see how many of that product the user wants to buy
        correct = true;
        askHowMany(res[i], answer);
        // If we got this far, we can break out of our loop
        break;
      }
    }
    // If "correct" was never set to true, then the user didn't chose a product id of
    // an existing product. Run promptCustomer again
    if (!correct) {
      console.log("Not a valid selection!");
      promptCustomer(res);
    }
  });
}

function askHowMany(product, productList) {
  // Asking the user how many of the selected product they would like
  // Passing in productList so we don't have to requery the database for
  // quantities again
  inquirer.prompt({
    type: "input",
    name: "quant",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    // First checking to see if we have enough of the selected product.
    // Updating our product quantity in the database, updating the product_sales
    // field with the updated value
    if ((product.stock_quantity - answer.quant) > 0) {
      connection.query("UPDATE products SET stock_quantity='" +
        (product.stock_quantity - answer.quant) + "', product_sales='" +
        (product.product_sales + answer.quant * product.price) +
        "' WHERE item_id='" + product.item_id + "'",
        function() {
          // Updating the total_sales for this product department
          connection.query("UPDATE departments SET total_sales=total_sales+'" +
            (answer.quant * product.price) +
            "' WHERE department_name='" +
            product.department_name + "';",
            function() {
              console.log("SALES ADDED TO DEPARTMENT!");
            });
          console.log("Product Bought!");
          // Running makeTable again, essentially resetting our app when done
          makeTable();
        });
    }
    else {
      // If we don't have enough product to buy or the user chooses an invalid quantity,
      // log this error
      console.log("Not a valid selection!");
      promptCustomer(productList);
    }
  });
}
