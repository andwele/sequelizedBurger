"use strict";

// Helper function, to keep titleize nice and clean.
function titleize(name) {
  // Return a new string with the first letter capitalized.
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

module.exports = titleize;
