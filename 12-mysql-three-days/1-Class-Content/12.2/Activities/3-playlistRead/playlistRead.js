var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

connection.query("SELECT * FROM songs", function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
  console.log("-----------------------------------");
});

connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
  for (var i = 0; i < res.length; i++) {
    console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
  }
});
