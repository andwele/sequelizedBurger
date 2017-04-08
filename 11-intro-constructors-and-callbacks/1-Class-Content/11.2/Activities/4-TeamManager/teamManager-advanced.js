// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  // flips a coin: if the the value is equal to 0 then this.offense goes up by one.
  // if the value is equal to 1 this.defense goes up by one
  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };
  this.badGame = function() {
    if (Math.floor(Math.random() * 2) === 0) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };
  this.printStats = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nOffense: " + this.offense + "\nDefense: " + this.defense + "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var score = 0;

// recursive function which will allow the user to create 5 starting players and
// 3 substitution players and then will print each players stats afterwards
var createPlayer = function() {
  // if the length of the team array is 8 or higher, no more questions will be asked
  if (starters.length + subs.length < 8) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
            return true;
          }
          return false;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable
      // player. turns the offense and defense variables into integers as well with parseInt
      var player = new Player(answers.name, answers.position, parseInt(answers.offense), parseInt(answers.defense));
      // adds a player to the starters array if there are less than five player
      // objects in it. otherwise adds the newest player object to the subs array
      if (starters.length < 5) {
        starters.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // starts first round
    playGame(0);
  }
};

// function to run the game itself. the variable x is used here to keep track of the rounds
function playGame(x) {
  if (x < 9) {
    // adds one to x and prints the current round of the game
    x++;
    console.log("----------\nROUND " + x + "\n----------");
    // finds two random numbers between 1 and 100 to compare the starter objects' stats to
    var offenseRandom = (Math.floor(Math.random() * 50) + 1);
    var defenseRandom = (Math.floor(Math.random() * 50) + 1);
    // loops through the starter array to find if the total value of their offense and defense
    var teamOffense = 0;
    var teamDefense = 0;
    for (var i = 0; i < starters.length; i++) {
      teamOffense += starters[i].offense;
      teamDefense += starters[i].defense;
    }
    console.log("Team Offense: " + teamOffense);
    console.log("Team defense: " + teamDefense);
    console.log("Random O: " + offenseRandom);
    console.log("Random D: " + defenseRandom);
    // determines if teamOffense is less than offenseRandom and adds one to score if true
    if (offenseRandom < teamOffense) {
      console.log("YOU SCORED A PONT!");
      score++;
    }
    // determines if teamDefense is greater than defenseRandom and subtracts one from score if true
    if (defenseRandom > teamDefense) {
      console.log("YOU WERE SCORED UPON!");
      score--;
    }
    // prompts to figure out if the player would like to make a substitution
    inquirer.prompt([
      {
        name: "confirm",
        type: "confirm",
        message: "Would you like to make a substitution?"
      }
    ]).then(function(answer) {
      // if the answer is yes, start the substitution prompts
      if (answer.confirm === true) {
        inquirer.prompt([
          {
            name: "sub",
            type: "rawlist",
            message: "Who would you like to sub in?",
            // sets the names of all those contained within the subs array as choices
            choices: subs
          }
        ]).then(function(subIn) {
          // finds the player object within the subs array with the name that matches
          // the user's choice and places it within the sideline variable
          var sideline = {};
          var number = 0;
          for (var i = 0; i < subs.length; i++) {
            if (subs[i].name === subIn.sub) {
              number = i;
              sideline = subs[i];
            }
          }
          inquirer.prompt([
            {
              name: "sub",
              type: "rawlist",
              message: "Who would you like to sub out?",
              choices: starters
            }
          ]).then(function(subOut) {
            // finds the player object within the starters array with the name that matches the user's choice
            // and swaps it with the value contained within sideline after moving them into the subs array
            for (var i = 0; i < starters.length; i++) {
              if (starters[i].name === subOut.sub) {
                subs[number] = starters[i];
                starters[i] = sideline;
                console.log("SUBSTITUTION MADE!");
              }
            }
            // starts the next round
            playGame(x);
          });
        });
      }
      else {
        // starts the next round
        playGame(x);
      }
    });
  }
  else {
    // prints the final score
    console.log("FINAL SCORE: " + score);
    // if the score was greater than 0, prints the winning message and increases starters stats
    if (score > 0) {
      console.log("Good game, everyone!\nYour current starters' stats have improved!");
      for (var i = 0; i < starters.length; i++) {
        starters[i].goodGame();
      }
    }
    // if the score was less than 0, prints the losing message and decreases starters stats
    if (score < 0) {
      console.log("That was a poor performance!\nYour current starters' stats have decreased!");
      for (var i = 0; i < starters.length; i++) {
        starters[i].badGame();
      }
      // if the score was zero, prints the tie message and does nothing to the starters stats
    }
    if (score === 0) {
      console.log("It was a tie game! Not good. Not bad.");
    }
    // prompts the user if they would like to play again. if yes, run playgame with a value of 0 being passed into it.
    // if not, print the "come back again soon message" and exit
    inquirer.prompt({
      name: "again",
      type: "confirm",
      message: "Would you like to play another match?"
    }).then(function(answer) {
      if (answer.again === true) {
        // starts new match with the same players
        playGame(0);
      }
      else {
        console.log("Come back again soon!");
      }
    });
  }
}

// calls the function createPlayer() to start the code
createPlayer();
