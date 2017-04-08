// requiring our partyBus module exported from partyBus.js
var PartyBus = require("./partyBus.js");

// creating a new PartyBus with our constructor and storing it in zbtPartyBus
var zbtPartyBus = new PartyBus("Cosmo", "NYC", "Beersville, PA");

// console logging out the duds array property on our zbtPartyBus object
console.log("dudes?", zbtPartyBus.duds);

// calling the addDud method on our zbtPartyBus object
zbtPartyBus.addDud("female", "Moon", 10);

console.log("dudes?", zbtPartyBus.duds);

// adding more duds to zbtPartyBus
zbtPartyBus.addDud("male", "Breaker", 10);
zbtPartyBus.addDud("female", "Pine", 8);
zbtPartyBus.addDud("male", "Chance", 9);
zbtPartyBus.addDud("male", "West", 4);
zbtPartyBus.addDud("female", "Honor", 6);

console.log("dudes?", zbtPartyBus.duds);
