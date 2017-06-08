
var dogs = { 
	raining: "true", 
	noise: "Woof!", 
	makeNoise: function() {
		if (this.raining) {
			console.log(this.noise);
		}
	}
}


var cats = {
	raining: "false",
	noise: "Meow!",
	makeNoise: function() {
		if (this.raining) {
			console.log(this.noise);
		}
	}
}

function massHysteria () {
    if ((cats.raining && dogs.raining) == true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}