"use strict";

var should = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    disemvowel("this is lowcase").should.equal("ths s lwcs");
  });

  it("should remove all vowels from upcase strings", function () {
    // Write test here that checks to see if disemvowel removes all vowels from upcase strings; start with "THIS US UPCASE"
    should.equal(true, false, 'Replace this test with a test case that passes "THIS US UPCASE" as input to disemvowel');
  });

  it("should remove all vowels from mixed strings", function () {
    // Write test here that checks to see if disemvowel removes all vowels from mixed case strings; start with "this IS mixed"
    should.equal(true, false, 'Replace this test with a test case that passes "this IS mixed" as input to disemvowel');
  });

  it("should ignore numbers in input strings", function () {
    // Write test here that checks to see if disemvowel correctly ignores numbers; start with "this IS mixed and has 2 NUMBERS 92"
    should.equal(true, false, 'Replace this test with a test case that passes "this IS mixed and has 2 NUMBERS 92" as input to disemvowel');
  });

  it("should converts numbers to strings", function () {
    disemvowel(10971).should.equal("10971");
  });
});
