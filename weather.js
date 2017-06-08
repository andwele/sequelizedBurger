var WeatherAdmin = require("./WeatherAdmin");

// Hold the value whether someone is an "admin" or "user"
var loginType = process.argv[2];

// If they are a user... they will also need to provide a "name"
var userName = process.argv[3];

// And they will need to provide a "location"
var userLocation = process.argv[4];

// Create an instance of the WeatherAdmin. Remember WeatherAdmin is a constructor! Not an object.
var MyAdmin = new WeatherAdmin();

// Create a "UserSearch" constructor. 
// It should accept a user’s name and location as arguments, 
// and store the value of "Date.now()" in a "date" property.

if (loginType === "admin") {

  MyAdmin.getData();

}

else {

  MyAdmin.newUserSearch(userName, userLocation);

}