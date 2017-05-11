"use strict";

var multiply = function multiply(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Multiply requires two numbers. One or both of your arguments was not a number.");
  }
  else {
    return x * y;
  }
};

module.exports = multiply;
