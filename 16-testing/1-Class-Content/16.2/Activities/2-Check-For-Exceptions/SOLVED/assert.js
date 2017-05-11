"use strict";

var assertThrows = function(func, x, y) {
  var threw = false;

  // Try to execute func with x, y
  try {
    func(x, y);
  }
  catch (err) {
    // If func throws, note it.
    threw = true;
  }

  // Report whether func threw.
  if (!threw) {
    console.log("Function did not throw.");
  }
  else { 
    console.log("Function threw, as expected.");
  }

  // Return whether func threw.
  return threw;
};

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Either x or y is not a number. Please try again with numbers.";
  }
  else return x * y;
};

assertThrows(multiply, "a", 2);