var fs = require("fs");
var UserSearch = require("./UserSearch");

var WeatherAdmin = function() {

  this.getData = function() {
    fs.readFile("log.txt", "utf8", function(error, data){

      console.log(data);

    });
  };

  this.newUserSearch = function(name, location) {

    var newUserSearch = new UserSearch(name, location);
    var logTxt = "\nName: " + newUserSearch.name +
    " Location: " + newUserSearch.location + " Date: " + newUserSearch.date;

    fs.appendFile("log.txt", logTxt);

    newUserSearch.getWeather();

  };

};

module.exports = WeatherAdmin;
