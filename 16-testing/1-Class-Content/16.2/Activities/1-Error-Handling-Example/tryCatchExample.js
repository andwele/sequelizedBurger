"use strict";

// Get filename from user
var filename = process.argv[2];
var mockError = require("./helpers").mockError;
var readFile = require("./helpers").readFile;

// readFile throws due to an unknown error with the filesystem.
readFile(filename);

console.log("This console.log never runs!!");
