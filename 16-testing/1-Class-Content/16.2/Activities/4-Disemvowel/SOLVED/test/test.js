"use strict";

var should = require("chai").should();
var disemvowel = require("../disemvowel");

describe("Disemvowel", function() {
  it("should remove all vowels from lowercase strings", function() {
    disemvowel("this is lowcase").should.equal("ths s lwcs");
  });

  it("should remove all vowels from upcase strings", function() {
    disemvowel("THIS US UPCASE").should.equal("THS S PCS");
  });

  it("should remove all vowels from mixed strings", function() {
    disemvowel("this IS mixed").should.equal("ths S mxd");
  });

  it("should ignore numbers in input strings", function() {
    disemvowel("this IS mixed and has 2 NUMBERS 92")
      .should.equal("ths S mxd nd hs 2 NMBRS 92");
  });

  it("should cast numbers to strings", function() {
    disemvowel(10971).should.equal("10971");
  });
});
