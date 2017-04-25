// Dependencies
var express = require("express");

// Create express app instance.
var app = express();

// Routes
app.get("/:operation/:firstNum/:secondNum", function(req, res) {

  // Parameters are received from the URL
  var operation = req.params.operation;

  // Parameters are converted to integers
  var firstNum = parseInt(req.params.firstNum);
  var secondNum = parseInt(req.params.secondNum);
  var result;

  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
    case "add":
      result = firstNum + secondNum;
      break;
    case "subtract":
      result = firstNum - secondNum;
      break;
    case "multiply":
      result = firstNum * secondNum;
      break;
    case "divide":
      result = firstNum / secondNum;
      break;
    default:
      result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Initiate the listener.
app.listen(3002);
