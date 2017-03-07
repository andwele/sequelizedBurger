// Initialize Firebase


// Create a variable to reference the database


// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.


// If Firebase has a highPrice and highBidder stored (first case)


// Set the initial variables for highBidder equal to the stored values.


// Change the HTML to reflect the initial value


// Print the initial data to the console.


// Else keep the initial variables for highBidder equal to the initial values


// If any errors are experienced, log them to console.


// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button

// prevent form from submitting with event.preventDefault() or returning false

// Get the input values


// Log the Bidder and Price (Even if not the highest)


// If Then statements to compare against previous high bidder


// Alert that they are High Bidder


// Save the new price in Firebase


// Log the new High Price


// Store the new high price and bidder name as a local variable (could have also used the firebase variable)


// Change the HTML to reflect the new high price and bidder

// Else tell user their bid was too low via alert