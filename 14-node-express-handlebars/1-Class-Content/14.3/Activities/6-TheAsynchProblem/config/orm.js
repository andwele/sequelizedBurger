var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, callback) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    console.log("Do this query", queryString);

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
      console.log('We got some response from the database');
      callback(err, result);
    });
  }
};

module.exports = orm;
