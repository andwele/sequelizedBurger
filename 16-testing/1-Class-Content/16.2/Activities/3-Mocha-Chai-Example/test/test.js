"use strict";

var should = require("chai").should();

var multiply = function(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x or y is not a number.");
  }
  else return x + y;
};

describe("Multiply", function() {
  
  it("should multiply properly when passed numbers", function () {
    multiply(2, 4).should.equal(8);
  });

  it("should properly multiply 14 * 2", function () {
    multiply(14, 2).should.equal(28);
  });

  it("should properly multiply 6 * 5", function () {
    multiply(6, 5).should.equal(10);
  });

  it("should throw when not passed numbers", function() {
    (function() {
      multiply(2, "4");
    }).should.throw(Error);
  });
});
