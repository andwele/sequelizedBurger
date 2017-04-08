// You should always 'use strict'. But you can't trust that others will.
// This is why you should ensure your constructors are scope-safe: It
// anticipates and compensates for common mistakes users of your code
// will make.

function Person(firstName, lastName) {

  console.log("Called with new: " + (this instanceof Person));

  this.firstName = firstName;

  this.lastName = lastName;

}

var right = new Person("Augustus", "Caesar");
var wrong = Person("Leifr", "Eriksson");
