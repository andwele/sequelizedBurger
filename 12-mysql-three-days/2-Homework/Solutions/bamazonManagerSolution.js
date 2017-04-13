const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "Bamazon"
});

// Function to grab the products table from the database and print results to console
var makeTable = function() {

  // Selects all of the data from the MySQL products table
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) {
      throw err;
    }

    // Prints the table to the console with minimal styling
    var tab = "\t";
    console.log("ItemID\tProduct Name\tDepartment Name\tPrice\t# In Stock");
    console.log("--------------------------------------------------------");
    // For loop goes through the MySQL table and prints each individual row on a new line
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].ItemID + tab + res[i].ProductName + tab + res[i].DepartmentName +
        tab + res[i].Price + tab + res[i].StockQuantity
      );
    }
    console.log("--------------------------------------------------------");

    // Runs the customer's prompts after creating the table.
    // Sends res so the promptCustomer function is able to search through the data
    promptManager(res);
  });
};

// Function for adding an item into the store
function addItem() {
  inquirer.prompt([
    {
      type: "input",
      name: "productName",
      message: "What is the name of the product?"
    }, {
      type: "input",
      name: "department",
      message: "What department does it fit into?"
    }, {
      type: "input",
      name: "price",
      message: "What is the price of the item?"
    }, {
      type: "input",
      name: "quantity",
      message: "How many of the item are available?"
    }
  ]).then(function(val) {
    connection.query("INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('" +
    val.productName + "','" + val.department + "'," + val.price + "," + val.quantity + ");",
    function(err, res) {
      if (err) {
        throw err;
      }
      console.log("Item added to Bamazon!");
      makeTable();
    });
  });
}

// function for adding quantity
function addQuantity() {
  inquirer.prompt([
    {
      type: "input",
      name: "productName",
      message: "What product are you updating?"
    }, {
      type: "input",
      name: "newQuantity",
      message: "How much of this item are you adding?"
    }
  ]).then(function(val) {
    connection.query(
      "UPDATE products SET stock_quantity = stock_quantity+" +
      val.newQuantity + " WHERE product_name='" + val.productName + "'",
      function(err, res) {
        if (err) {
          throw err;
        }

        if (res.affectedRows === 0) {
          console.log("That item does not seem to exist at this time. Try selecting a different item.");
          makeTable();
        }
        else {
          console.log("Items have been added to the inventory!");
          makeTable();
        }
      });
  });
}

function promptManager(res) {
  inquirer.prompt([
    {
      type: "rawlist",
      name: "choice",
      message: "What would you like to do?",
      choices: ["Add New Item", "Add Quantity to Existing Items"]
    }
  ]).then(function(val) {
    if (val.choice === "Add New Item") {
      addItem();
    }
    if (val.choice === "Add Quantity to Existing Items") {
      addQuantity();
    }
  });
}

makeTable();
