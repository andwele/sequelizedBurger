// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// Question mark signifies that the parameter is "optional".
app.get("/api/:characters?", function(req, res) {
  // Grab the selected parameter
  var chosen = req.params.characters;

  // If a parameter is provided...
  if (chosen) {
    console.log(chosen);

    // Filter to show only the selected character
    for (var i = 0; i < characters.length; i++) {
      if (chosen === characters[i].routeName) {
        return res.json(characters[i]);
      }
    }

    // Otherwise display "No character found"
    return res.send("No character found");
  }

  // If no parameter is provided display all the characters
  return res.json(characters);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
