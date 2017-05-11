"use strict";

function formatNames(nameList) {
  if (!Array.isArray(nameList)) {
    throw new Error("format_names expects an array. " + nameList + " is not an array.");
  }
  else if (!nameList.length) {
    // Hm. Can we get rid of this?
    return "";
  }
  else if (nameList.length === 1) {
  // Hm. Can we get rid of this?
    return nameList[0];
  }
  else if (nameList.length === 2) {
    // Hm. Can we get rid of this?
    return nameList[0] + " & " + nameList[1];
  }
  else {
    var names = "";

    var length = nameList.length;
    for (var i = 0; i < length; i += 1) {
      var separator;

      if (i === 0) {
        separator = "";
      }
      else if (i === length - 1) {
        separator = " & ";
      }
      else {
        separator = ", ";
      }

      names += separator + nameList[i];
    }

    return names;
  }
}

module.exports = formatNames;
