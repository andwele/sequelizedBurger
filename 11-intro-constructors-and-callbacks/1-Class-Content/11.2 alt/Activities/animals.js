function Animal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function() {
        console.log('Feeding');
        this.sleepy = true;
        console.log('Is sleepy now?', this.sleepy);
    }

    this.sleep = function() {
        console.log('------');
        console.log('Sleeping');
        console.log('------');
        console.log('Is sleepy?', this.sleepy);
        this.sleepy = false;
    }
}

function Cat() {
    this.meow = function() {
        console.log('Meoow');

    }
}

function Dog(isSleepy) {
    this.sleepy = isSleepy;
    this.bark = function() {
        console.log('Bark');
    }
}

var newAnimal = new Animal(true, true, false, 12);

Dog.prototype = Object.getPrototypeOf(Animal);

var myDog = new Dog(false);
var myDog2 = new Dog(true);

console.log(myDog.feed);

Cat.prototype = newAnimal;
var myCat = new Cat();
var anotherCat = new Cat();