"use strict";

var assertThrows = function (func, x, y) {
  try {
    var result = func(x, y);
    console.log('The test passed! ' + x + " * " + y + " = " + result);
    return result;
  }
  catch (error) {
    console.log('The test failed: ' + error);
    return false;
  }
};

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Either x or y is not a number. Please try again with numbers.";
  }
  else return x * y;
};

assertThrows(multiply, 2, 2);
assertThrows(multiply, "a", 2);
assertThrows(multiply, 2, 10);
assertThrows(multiply, "a", "b");
assertThrows(multiply, 200, 10);


//assert(multiply(2, 2), 4); = true
//assert(multiply(2 * 7), 2) = false;