var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("INSERT INTO products SET ?", {
  flavor: "Rocky Road",
  price: 3.00,
  quantity: 50
}, function(err, res) {});

connection.query("UPDATE products SET ? WHERE ?", [{
  quantity: 100
}, {
  flavor: "Rocky Road"
}], function(err, res) {});

connection.query("DELETE FROM products WHERE ?", {
  flavor: "strawberry"
}, function(err, res) {});

connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
  console.log(res);
});
