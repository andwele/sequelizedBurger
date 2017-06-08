function Player (name, job, gender, age, strength, health) {
    this.name = name;
    this.profession = job;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HitPoints = health;
    this.PrintStats = function () {
        console.log(this.name);
        console.log(this.profession);
        console.log(this.gender);
        console.log(this.age);
        console.log(this.strength);
        console.log(this.HitPoints);
    }
}

// This is the code that Dustin wrote. 
this.PrintStats = function() {
    console.log("Name: " + this.name +
    //the "\n" is given to begin a new line in the console.log
                "\nProfession: " + this.profession +
                "\nGender: " + this.gender +
                "\nAge: " + this.age +
                "\nStrength: " + this.strength +
                "\nHitPoints: " + this.health +
                "\n-----------------------------------");
    }

    //This is the method that prints all of the stats for a character.
    this.isAlive = function() {
        if (this.HitPoints > 0) {
            console.log(this.name + " is still alive!");
            return true;
        }
        else {
            console.log(this.name + " is dead.")
            return false;
        }
    };


    //method which increases this character's stats when called.
    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.health +=25;
    }

var warrior = new Player ("")

/* 
This is the stuff that CJ helped me create. 
 var player1 = new Player("Brandon", "Medic", "Male", "76", "98", "34");
 player1.PrintStats();

 var player2 = new Player("Lisa", "Clerk", "Female", "25", "100", "78");
 player2.PrintStats();

 */

/*
This is what I did. 
function isAlive () {
    if (HitPoints > 0) {
        return true;
    }
    return false;
}
*/

