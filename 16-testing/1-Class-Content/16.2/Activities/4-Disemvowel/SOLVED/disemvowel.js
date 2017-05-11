"use strict";

const disemvowel = ((str) => {
  if (typeof str === "number") {
    return String(str);
  }
  return str.replace(/[aeiou]/ig, "");
});

module.exports = disemvowel;
