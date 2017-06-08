

function writeString ( inputString, callbackFunction ) {
    console.log(inputString);
    callbackFunction();
}

writeString("Some string", function () {
    console.log("This callback was called.");
});

function booleanFunc( booleanInput, callbackFunction) {
    if (booleanInput) {
        callbackFunction();
    }
}

booleanFunc(true, function() {
    console.log("Boolean callback was called.")
})

var logThis = function () {
    console.log("Boolean callback was called.")
}

booleanFunc(true, logThis)

function fandV(inputFunction, inputValue) {
    return function () {
        return inputFunciton(inputValue);
    }
}

function someInputFunction ( inputValue ) {
    console.log("The curried function input value is: ", inputValue);
}

fandV()()
