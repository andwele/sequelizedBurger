"use strict";

var should = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    disemvowel("this is lowcase").should.equal("ths s lwcs");
  });

  it("should remove all vowels from upcase strings", function () {
    // Write test here that checks to see if disemvowel removes all vowels from upcase strings; start with "THIS US UPCASE"
    disemvowel("THIS US UPCASE").should.equal("THS S PCS");
  });

  it("should remove all vowels from mixed strings", function () {
    // Write test here that checks to see if disemvowel removes all vowels from mixed case strings; start with "this IS mixed"
  });

  it("should ignore numbers in input strings", function () {
    // Write test here that checks to see if disemvowel correctly ignores numbers; start with "this IS mixed and has 2 NUMBERS 92"
  });

  it("should converts numbers to strings", function () {
    disemvowel(10971).should.equal("10971");
  });
});
