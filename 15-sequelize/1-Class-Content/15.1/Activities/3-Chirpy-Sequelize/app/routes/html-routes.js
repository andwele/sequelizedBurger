// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "../public/index.html"));
  });

};
