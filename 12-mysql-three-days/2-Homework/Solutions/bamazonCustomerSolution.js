// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");

// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

// Creates the connection with the server and makes the table upon successful connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  makeTable();
});

// Function to grab the products table from the database and print results to the console
var makeTable = function() {

  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    // Prints the table to the console with minimal styling
    var tab = "\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("--------------------------------------------------------");

    // For loop goes through the MySQL table and prints each individual row on a new line
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].item_id + tab + res[i].product_name + tab +
        res[i].department_name + tab + res[i].price + tab + res[i].stock_quantity);
    }
    console.log("--------------------------------------------------------");

    // Runs the customer's prompts after creating the table.
    // Sends res so the promptCustomer function is able to search though the data
    promptCustomer(res);
  });
};

// Function containing all customer prompts
var promptCustomer = function(res) {

  // Prompts user for what they would like to purchase
  inquirer.prompt([{
    type: "input",
    name: "choice",
    message: "What would you like to purchase? [Quit with Q]"
  }]).then(function(val) {

    // Set the var correct to false so as to make sure the user inputs a valid product name
    var correct = false;

    // Loops through the MySQL table to check that the product they wanted exists
    for (var i = 0; i < res.length; i++) {

      // If the product exists, save the data for said product within the product and id variables
      if (res[i].product_name === val.choice) {
        correct = true;
        var product = val.choice;
        var id = i;

        // Prompts the user to see how many of the product they would like to buy
        inquirer.prompt([{
          type: "input",
          name: "quant",
          message: "How many would you like to buy?"
        }]).then(function(val) {

          // Checks to see if the amount requested is less than the amount that is available
          if ((res[id].stock_quantity - val.quant) > 0) {

            // Removes the amount requested from the MySQL table
            connection.query(
              "UPDATE products SET stock_quantity='" + (res[id].stock_quantity - val.quant) +
              "' WHERE product_name='" + product + "'",
              function(err, res2) {
                if (err) {
                  throw err;
                }

                // Tells the user that the product has been purchased
                console.log("PRODUCT BOUGHT!");

                // Rewrites the table and starts again
                makeTable();
              });
          }

          // If the amount requested was greater than the amount available, restarts prompts
          else {
            console.log("NOT A VALID SELECTION!");
            promptCustomer(res);
          }
        });
      }
      // If the user inputed Q, exist program
      if (val.choice === "Q" || val.choice === "q") {
        process.exit();
      }
    }

    // If the product requested does not exist, restarts prompts
    if (i === res.length && correct === false) {
      console.log("NOT A VALID SELECTION");
      promptCustomer(res);
    }
  });
};
