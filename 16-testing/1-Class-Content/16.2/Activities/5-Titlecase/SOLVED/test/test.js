"use strict";

var should = require("chai").should();
var titleize = require("../titleize");

describe("Titleize", function() {
  it("should capitalize initial letter of Alexander's name.", function() {
    titleize("alexander").should.equal("Alexander");
  });
});
