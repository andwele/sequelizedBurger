// // Get Variables
var argOne = process.argv[2];
var argTwo = process.argv[3];

// Run the test
if (argOne === argTwo) {

  // Print equality.
  console.log(true);
}
else {
  console.log(false);
}

// BONUS: If the sum of remainders is still 0... then that means both were multiples of 7 to begin with.
if ((argOne % 7) === 0 && (argTwo % 7) === 0) {
  console.log(true);
}
else {
  console.log(false);
}
