"use strict";

var formatNames = require("../src/formatNamesClean");
var should = require("chai").should();

describe("formatNames", function() {

  it("should throw if it doesn't receive an array", function() {
    (function() {
      formatNames("HAHAHA!");
    }).should.throw(Error);
  });

  it("should return empty string when it gets an empty list", function() {
    (formatNames([])).should.equal("");
  });

  it("should print a single name if it only receives one", function() {
    (formatNames(["Pushkin"])).should.equal("Pushkin");
  });

  it("should print names separated with an ampersand if it receives two", function() {
    (formatNames(["Pushkin", "Gogol"])).should.equal("Pushkin & Gogol");
  });

  it("should separate initial names with commas and last with ampersand for long lists", function() {
    (formatNames(["Pushkin", "Gogol", "Dostoevsky"])).should.equal("Pushkin, Gogol & Dostoevsky");
  });
});
