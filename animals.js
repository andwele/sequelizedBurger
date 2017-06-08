function Animal (hungry, sleepy, bored, age) {
    this.hungry = hunger;
    this.sleepy = sleep;
    this.bored = bored;
    this.age = age;

    this.feed = function() {
        console.log("Feeding");
    }

    this.sleep = function() {
        console.log("Sleeping");
    }
}

function Cat () {
    this.meow = function() {
        console.log("Meeow!");
    }
}

console.log(new Animal(true, false, false, 12));

var newAnimal = new Animal(true, false, false, 12);
var myCat = new Cat();

var myPrototype = Object.getPrototypeOf(myCat);

var myCatPrototype = Object.getPrototypeOf(myCat);

console.log("Prototype", Object.getPrototypeOf(myCat));

myCat.prototype = newAnimal.prototype;

console.log("Prototype", Object.getPrototypeOf(myCat));