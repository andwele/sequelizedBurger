// Take in an input value in the form of an integer
var inputNum = parseInt(process.argv[2]);
var multipleNum = parseInt(process.argv[3]);
var sum = 0;

// Go from 6 to the number. Adding up the multipleNum each time (to only get its multiples).
for (var i = multipleNum; i <= inputNum; i += multipleNum) {

  // Each time add i to the sum.
  sum += i;
}

// Print out the sum
console.log(sum);

// Example:
// User Input: node multipleBonus 12 3
// Output: 18 (3 + 6 + 9 + 12 = 30)
