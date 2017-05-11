"use strict";

function formatNames(nameList) {
  if (!Array.isArray(nameList)) {
    throw new Error("format_names expects an array. " + nameList + " is not an array.");
  }
  else {
    var names = "";

    var length = nameList.length;
    var separator;
    console.log(nameList);
    for (var i = 0; i < length; i += 1) {
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
  }
  console.log(names);
  return names;
}

module.exports = formatNames;
