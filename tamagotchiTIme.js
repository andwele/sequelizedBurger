
function DigitalPal (hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.feed = function () {
        if (this.hungry) {
            console.log("That was yummy!");
            this.hungry = false;
            this.sleepy = true;
        }
        else {
            console.log("No thanks! I'm full.");
        }
    }

    this.sleep = function() {
        if (this.sleepy) {
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }

        else if (this.sleepy == false) {
            console.log("No way! I'm not tired.");
        }
    }

    this.play = function () {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        }
        else if (this.bored == false) {
            console.log("Not right now. Later?");
        }
    }

    this.increaseAge = function () {
                this.age += 1;
                console.log("Happy Birthday to me! I am " + this.age + " years old!")
    }

    var Dog = new DigitalPal(false, false, true, 0) 

    dog.outside = false;

    dog.bark = function () {
        console.log("Woof woof!")
    }

    dog.goOutside = function () {
        if (this.outside == false) {
            console.log("Yay! I love the outdoors");
            dog.outside = true;
            dog.bark();
        }
        else {
            console.log("We're already outside, though.")
        }
    }

    dog.goInside = function () {
        if (dog.outside == true) {
            console.log("Aww...do we have to? Fine!");
            dog.outside = false;
        }
        else {
            console.log("I'm already inside...");
        }
    }
    
    var Cat = new DigitalPal(true, true, true, 98);
    Cat.HouseCondition = 100;

    Cat.meow = function () {
        console.log("Meow! Meow!");
    }

    Cat.destroyFurniture = function () {
        if (Cat.HouseCondition > 0) {
            Cat.HouseCondition -= 10;
            console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
            Cat.bored = false;
            Cat.sleepy = true;
        }   
    }

    Cat.buyNewFurniture = function () {
        Cat.HouseCondition += 50;
        console.log("Are you sure about that?");
    }

}