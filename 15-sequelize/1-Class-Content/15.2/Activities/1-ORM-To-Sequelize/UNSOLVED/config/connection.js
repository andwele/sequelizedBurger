// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require("mysql");

// we placed the connections in this source object
var source = {
  // localhost
  localhost: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
  },

  // jawsDB
  jawsDB: {
    port: 3306,
    host: "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gbieck76r0fth0ow",
    password: "oyqqwcmyrex9yoqv",
    database: "z0orxyvg23zov0z2"
  }
};

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
