"use strict";

// Throw error.
var mockError = function() {
  throw "Error: Filesystem appears corrupted, or file does not exist. Try again later.";
};

// Mock error due to filesystem.
var readFile = function(filename) {
  mockError();
};

module.exports.mockError = mockError;
module.exports.readFile = readFile;
