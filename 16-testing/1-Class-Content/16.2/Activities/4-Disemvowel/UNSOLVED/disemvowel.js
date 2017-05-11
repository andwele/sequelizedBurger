"use strict";

const disemvowel = ((str) => {
  // Disemvowel needs to make sure input that is a number gets converted to a string.
  return str.replace(/[aeiou]/ig, "");
});

module.exports = disemvowel;
