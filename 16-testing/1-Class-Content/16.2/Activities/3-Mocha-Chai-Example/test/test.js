"use strict";

var should = require("chai").should();

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x * y;
};

describe("Multiply", function() {
  it("should multiply properly when passed numbers", function() {
    multiply(2, 4).should.equal(8);
  });

  it("should throw when not passed numbers", function() {
    (function() {
      multiply(2, "4");
    }).should.throw(Error);
  });
});
