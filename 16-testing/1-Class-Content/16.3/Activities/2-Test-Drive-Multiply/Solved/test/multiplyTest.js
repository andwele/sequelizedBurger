"use strict";

var multiply = require("../src/multiply.js");
var should = require("chai").should();

describe("Multiply", function() {

  it("should return the product of x and y when x and y are numbers", function() {
    multiply(2, 4).should.equal(8);
  });

  it("should throw when either argument is not a number", function() {
    (function() {
      multiply(2, "4");
    }).should.throw(Error);
  });

});