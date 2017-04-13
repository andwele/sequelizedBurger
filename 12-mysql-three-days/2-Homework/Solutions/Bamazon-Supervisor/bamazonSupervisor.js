// Requiring our dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Configuring our connection to our database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon"
});

// Connecting to our database, running makeTable which will start the app
connection.connect(function(err) {
  if (err) throw err;
  console.log("connection successful!");
  makeTable();
});

function makeTable() {
  // Displaying an initial list of products for the user, calling promptSupervisor
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    promptSupervisor();
  });
}

function promptSupervisor() {
  // Giving the user some options for what to do next
  inquirer.prompt([{
    type: "rawlist",
    name: "choice",
    message: "What would you like to do?",
    choices: ["View Product Sales by Department", "Create New Department"]
  }]).then(function(val) {
    // Checking to see what option the user chose and running the appropriate function
    if (val.choice === "View Product Sales by Department") {
      viewSales();
    }
    else if (val.choice === "Create New Department") {
      addDepartment();
    }
    else {
      // If the user chose a non existent or invalid option
      console.log("Not a valid selection!");
      promptSupervisor();
    }
  });
}

function addDepartment() {
  // Asking the user about the department they would like to add
  inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is the name of the department?"
  }, {
    type: "input",
    name: "overhead",
    message: "What is the overhead cost of the department?"
  }]).then(function(val) {
    // Using the information the user provided to create a new department
    connection.query("INSERT INTO departments (department_name,over_head_costs,total_sales)" +
      " VALUES ('" + val.name + "'," + val.overhead + ",0.0);",
      function(err) {
        if (err) throw err;
        // If successful, alert the user, run makeTable again
        console.log("ADDED DEPARTMENT!");
        makeTable();
      });
  });
}

function viewSales() {
  // Selects a few columns from the departments table, calculates a total_profit column
  connection.query("SELECT departments.department_id, departments.department_name," +
  " departments.over_head_costs, departments.total_sales," +
  " (departments.total_sales-departments.over_head_costs) AS total_profit FROM departments",
  function(err, res) {
    console.table(res);
  });
}

