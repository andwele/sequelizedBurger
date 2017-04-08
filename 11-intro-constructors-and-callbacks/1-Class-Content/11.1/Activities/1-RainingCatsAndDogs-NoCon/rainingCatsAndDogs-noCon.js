// creates an object and sets it to "dogs"
var dogs = {
  // creates the property "raining" and sets it to true
  raining: true,
  // creates the property "noise" and sets it to "Woof!"
  noise: "Woof!",
  // creates the method "makeNoise", which when called, prints dogs.noise if .raining is true
  makeNoise: function() {
  // the 'this' keyword refers to the object it's called from
  // i.e. this.raining refers to the raining property of 'this' particular object
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};

// creates an object with a similar layout to "dogs" and sets it to "cats"
var cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
};

// calls the "makeNoise" methods for both objects
dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

// creates a function called "massHysteria" which takes in both objects and
// prints a message to the screen if ".raining" is true for both of them
var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);
