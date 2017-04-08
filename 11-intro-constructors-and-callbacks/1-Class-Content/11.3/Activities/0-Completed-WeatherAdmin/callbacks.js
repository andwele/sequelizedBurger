// function writeString( inputString, callbackFunction ) {
// 	console.log(inputString);
// 	callbackFunction();
// }

// writeString("Some string", function () {
// 	console.log("This callback was called.");
// });


// function booleanFunc(booleanInput, callbackFunction) {
// 	if (booleanInput) {
// 		callbackFunction();
// 	}
// }

// var logThis = function () {
// 	console.log('Boolean callback was called.')
// }

// booleanFunc(true, logThis)



function fandV(inputFunction, inputValue) {
	return function () {
		return inputFunction(inputValue);
	}
}

function someInputFunction( inputValue ) {
	console.log('The curried function input value is: ',inputValue);
}

fandV(someInputFunction, 'Input String')();


