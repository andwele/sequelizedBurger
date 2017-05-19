"use strict";

var should = require("chai").should();

describe("Universe", function() {

  it("should be self-consistent", function() {
    (2).should.equal(2);
  });

  it("should make 18 equal 18", function() {
    (18).should.equal(18);
  });

  it("should make 4 equal 5", function() {
    (4).should.equal(5);
  });

  it("should make 4 equal 4", function() {
    (4).should.equal(4);
  });

});
