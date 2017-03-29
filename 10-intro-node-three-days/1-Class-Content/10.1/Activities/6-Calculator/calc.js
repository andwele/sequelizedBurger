var operand = process.argv[2];
var num1 = parseInt(process.argv[3]);
var num2 = parseInt(process.argv[4]);

if (operand === 'add') {
    console.log(num1 + num2);
} else if (operand == 'subtract') {
    console.log(num1 - num2);
} else if (operand == 'multiply') {
    console.log(num1 * num2);
}