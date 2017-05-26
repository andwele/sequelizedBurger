/* MongoDB Zoo Site (18.2.9)
 * Front-End
 * ========================= */

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // For each entry of that json...
  for (var i = 0; i < data.length; i++) {
    // Append each of the animal's properties to the table
    $("tbody").append("<tr><td>" + data[i].name + "</td>" +
                         "<td>" + data[i].numlegs + "</td>" +
                         "<td>" + data[i].class + "</td>" +
                         "<td>" + data[i].weight + "</td>" +
                         "<td>" + data[i].whatIWouldReallyCallIt + "</td></tr>");
  }
}

// 1: On Load
// ==========

// The first thing this js file will do: ask the back end for a json with all animals
$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
});


// 2: Button Interactions
// ======================

// When user clicks the weight sort button, display table sorted by weight
$("#weight-sort").on("click", function() {
  // First, empty the table
  $("tbody").empty();
  // Then remove and apply classes to distinguish which column we sorted by
  $("th").removeClass("active");
  $("#animal-weight").addClass("active");
  // Now do an api call to the back end for a json with all animals, sorted by weight
  $.getJSON("/weight", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});

// When user clicks the name sort button, display the table sorted by name
$("#name-sort").on("click", function() {
  // First empty results table
  $("tbody").empty();
  // Then remove and apply classes to distinguish which column we sorted by
  $("th").removeClass("active");
  $("#animal-name").addClass("active");
  // Now do an api call to the back end for a json with all animals, sorted by name
  $.getJSON("/name", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
});
