// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    };
    this.climb = function() {
        console.log("I'm climbing... but I can't get down!");
    }
    this.expressAffection = function() {
        console.log('I love you');
    }
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.expressAffection();
cats.expressAffection();

dogs.climb();

console.log(dogs);

// calling dogs and cats makeNoise methods
dogs.makeNoise(); // Woof!
cats.makeNoise(); // ----

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise(); // Meow!

var massHysteria = function(dogs, cats) {
    if (dogs.raining === true && cats.raining === true) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
};

massHysteria(dogs, cats);