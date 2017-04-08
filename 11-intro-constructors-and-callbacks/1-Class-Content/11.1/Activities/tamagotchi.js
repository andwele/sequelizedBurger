function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;

    this.feed = function() {
        if (this.hungry === true) {
            console.log("No longer hungry")
            this.hungry = false
            this.sleepy = true
        } else {
            console.log("Must conserve food")
        }
    }
    this.sleep = function() {
        if (this.sleepy) {
            console.log('Zzzzzzzzz');
            this.sleepy = false;
            this.bored = true;
            this.increaseAge()
        } else {
            console.log("No way! I'm not tired!")
        }
    }

    this.play = function() {
        if (this.bored) {
            console.log("Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Not right now");
        }
    }

    this.increaseAge = function() {
        this.age += 1;
        console.log("Happy Birthday to me ! I am " + age + " old!");
    }
}

var dog = new DigitalPal(true, true, false, 0);
dog.outside = false;
dog.bark = function() {
    console.log('Woof! Woof!');
}
dog.goOutside = function() {
    if (dog.outside == false) {
        console.log("Yay! I love the outdoors!")
        dog.outside = true;
        dog.bark();
    } else {
        console.log("we're already outside, though.")
    }

}

dog.goInside = function() {
    if (dog.outside == true) {
        console.log("Aw...Do we have to? Fine!")
        dog.outside = false;
    } else {
        console.log("I'm already inside...")
    }
}

var Cat = new DigitalPal(true, true, true, 98);
Cat.HouseCondition = 100;
Cat.meow = function() {
    console.log('Meow! Meow!');
}
Cat.destroyFurniture = function() {
    if (Cat.HouseCondition > 0) {
        Cat.HouseCondition -= 10;
        console.log("Muahahahahaha!! Take that furniture!");
        Cat.bored = false;
        Cat.sleepy = true;
    }
}
Cat.buyNewFurniture = function() {
    this.HouseCondition += 50;
    console.log("Are you sure about that?");
}

Cat.destroyFurniture();
Cat.destroyFurniture();
Cat.destroyFurniture();
Cat.destroyFurniture();
Cat.destroyFurniture();
Cat.destroyFurniture();
Cat.destroyFurniture();

dog.bark();
dog.goOutside();