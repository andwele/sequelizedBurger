// Execute this code when the DOM has fully loaded.
$(document).ready(function() {

  // VARIABLE DECLARATION
  // ===================================================================

  // Creating an object to hold our characters.
  var characters = {
    "Obi-Wan Kenobi": {
      name: "Obi-Wan Kenobi",
      health: 120,
      attack: 8,
      imageUrl: "assets/images/obi-wan.jpg",
      enemyAttackBack: 15
    },
    "Luke Skywalker": {
      name: "Luke Skywalker",
      health: 100,
      attack: 14,
      imageUrl: "assets/images/luke-skywalker.jpg",
      enemyAttackBack: 5
    },
    "Darth Sidious": {
      name: "Darth Sidious",
      health: 150,
      attack: 8,
      imageUrl: "assets/images/darth-sidious.png",
      enemyAttackBack: 20
    },
    "Darth Maul": {
      name: "Darth Maul",
      health: 180,
      attack: 7,
      imageUrl: "assets/images/darth-maul.jpg",
      enemyAttackBack: 25
    }
  };

  // Will be populated when the player selects a character.
  var currSelectedCharacter;
  // Populated with all the characters the player didn't select.
  var combatants = [];
  // Will be populated when the player chooses an opponent.
  var currDefender;
  // Will keep track of turns during combat. Used for calculating player damage.
  var turnCounter = 1;
  // Tracks number of defeated opponents.
  var killCount = 0;


  // FUNCTIONS
  // ===================================================================

  // This function will render a character card to the page.
  // The character rendered, the area they are rendered to, and their status is determined by the arguments passed in.
  var renderOne = function(character, renderArea, charStatus) {

    // This block of code builds the character card, and renders it to the page.
    var charDiv = $("<div class='character' data-name='" + character.name + "'>");
    var charName = $("<div class='character-name'>").text(character.name);
    var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
    var charHealth = $("<div class='character-health'>").text(character.health);
    charDiv.append(charName).append(charImage).append(charHealth);
    $(renderArea).append(charDiv);

    // If the character is an enemy or defender (the active opponent), add the appropriate class.
    if (charStatus === "enemy") {
      $(charDiv).addClass("enemy");
    }
    else if (charStatus === "defender") {
      // Populate currDefender with the selected opponent's information.
      currDefender = character;
      $(charDiv).addClass("target-enemy");
    }
  };

  // Function to handle rendering game messages.
  var renderMessage = function(message) {

    // Builds the message and appends it to the page.
    var gameMesageSet = $("#game-message");
    var newMessage = $("<div>").text(message);
    gameMesageSet.append(newMessage);

    // If we get this specific message passed in, clear the message area.
    if (message === "clearMessage") {
      gameMesageSet.text("");
    }
  };

  // This function handles the rendering of characters based on which area they are to be rendered in.
  var renderCharacters = function(charObj, areaRender) {

    // "characters-section" is the div where all of our characters begin the game.
    // If true, render all characters to the starting area.
    if (areaRender === "#characters-section") {
      $(areaRender).empty();
      // Loop through the characters object and call the renderOne function on each character to render their card.
      for (var key in charObj) {
        if (charObj.hasOwnProperty(key)) {
          renderOne(charObj[key], areaRender, "");
        }
      }
    }

    // "selected-character" is the div where our selected character appears.
    // If true, render the selected player character to this area.
    if (areaRender === "#selected-character") {
      renderOne(charObj, areaRender, "");
    }

    // "available-to-attack" is the div where our "inactive" opponents reside.
    // If true, render the contents of the combatants array to this location.
    if (areaRender === "#available-to-attack-section") {

      // Loop through the combatants array and call the renderOne function on each character.
      for (var i = 0; i < charObj.length; i++) {
        renderOne(charObj[i], areaRender, "enemy");
      }

      // Creates an on click event for each enemy.
      $(document).on("click", ".enemy", function() {

        // Saving the opponent's name.
        var name = ($(this).attr("data-name"));

        // If there is no defender, the clicked enemy will become the defender.
        if ($("#defender").children().length === 0) {
          renderCharacters(name, "#defender");
          $(this).hide();
          renderMessage("clearMessage");
        }
      });
    }

    // "defender" is the div where the active opponent appears.
    // If true, render the selected enemy in this location.
    if (areaRender === "#defender") {
      $(areaRender).empty();
      for (var i = 0; i < combatants.length; i++) {
        if (combatants[i].name === charObj) {
          renderOne(combatants[i], areaRender, "defender");
        }
      }
    }

    // Re-render defender when attacked.
    if (areaRender === "playerDamage") {
      $("#defender").empty();
      renderOne(charObj, "#defender", "defender");
    }

    // Re-render player character when attacked.
    if (areaRender === "enemyDamage") {
      $("#selected-character").empty();
      renderOne(charObj, "#selected-character", "");
    }

    // Remove defeated enemy.
    if (areaRender === "enemyDefeated") {
      $("#defender").empty();
      var gameStateMessage = "You have defeated " + charObj.name + ", you can choose to fight another enemy.";
      renderMessage(gameStateMessage);
    }
  };

  // Function which handles restarting the game after victory or defeat.
  var restartGame = function(inputEndGame) {

    // When the 'Restart' button is clicked, reload the page.
    var restart = $("<button>Restart</button>").click(function() {
      location.reload();
    });

    // Build div that will display the victory/defeat message.
    var gameState = $("<div>").text(inputEndGame);

    // Render the restart button and victory/defeat message to the page.
    $("body").append(gameState);
    $("body").append(restart);
  };

  // ===================================================================


  // Render all characters to the page when the game starts.
  renderCharacters(characters, "#characters-section");

  // On click event for selecting our character.
  $(document).on("click", ".character", function() {

    // Saving the clicked character's name.
    var name = $(this).attr("data-name");

    // If a player character has not yet been chosen...
    if (!currSelectedCharacter) {
      // We populate currSelectedCharacter with the selected character's information.
      currSelectedCharacter = characters[name];
      // We then loop through the remaining characters and push them to the combatants array.
      for (var key in characters) {
        if (key !== name) {
          combatants.push(characters[key]);
        }
      }

      // Hide the character select div.
      $("#characters-section").hide();

      // Then render our selected character and our combatants.
      renderCharacters(currSelectedCharacter, "#selected-character");
      renderCharacters(combatants, "#available-to-attack-section");
    }
  });

  // When you click the attack button, run the following game logic...
  $("#attack-button").on("click", function() {

    // If there is a defender, combat will occur.
    if ($("#defender").children().length !== 0) {

      // Creates messages for our attack and our opponents counter attack.
      var attackMessage = "You attacked " + currDefender.name + " for " + (currSelectedCharacter.attack * turnCounter) + " damage.";
      var counterAttackMessage = currDefender.name + " attacked you back for " + currDefender.enemyAttackBack + " damage.";
      renderMessage("clearMessage");

      // Reduce defender's health by your attack value.
      currDefender.health -= (currSelectedCharacter.attack * turnCounter);

      // If the enemy still has health..
      if (currDefender.health > 0) {

        // Render the enemy's updated character card.
        renderCharacters(currDefender, "playerDamage");

        // Render the combat messages.
        renderMessage(attackMessage);
        renderMessage(counterAttackMessage);

        // Reduce your health by the opponent's attack value.
        currSelectedCharacter.health -= currDefender.enemyAttackBack;

        // Render the player's updated character card.
        renderCharacters(currSelectedCharacter, "enemyDamage");

        // If you have less than zero health the game ends.
        // We call the restartGame function to allow the user to restart the game and play again.
        if (currSelectedCharacter.health <= 0) {
          renderMessage("clearMessage");
          restartGame("You been defeated...GAME OVER!!!");
          $("#attack-button").unbind("click");
        }
      }
      // If the enemy has less than zero health they are defeated.
      else {
        // Remove your opponent's character card.
        renderCharacters(currDefender, "enemyDefeated");
        // Increment your kill count.
        killCount++;
        // If you have killed all of your opponents you win.
        // Call the restartGame function to allow the user to restart the game and play again.
        if (killCount >= 3) {
          renderMessage("clearMessage");
          restartGame("You Won!!!! GAME OVER!!!");
        }
      }
      // Increment turn counter. This is used for determining how much damage the player does.
      turnCounter++;
    }
    // If there is no defender, render an error message.
    else {
      renderMessage("clearMessage");
      renderMessage("No enemy here.");
    }
  });

});
