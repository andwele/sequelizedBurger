// This is the operator (wither +, - , x, or )
var operator = process.argv[2];

var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);



if (operator === "add" ) {
    console.log(process.argv[3] + process.argv[4]);
}

if (operator === "sub") {
    console.log(process.argv[3] - process.argv[4]);
}

if (operator === "mutiply") {
    console.log(process.argv[3] * process.argv[4]);
}