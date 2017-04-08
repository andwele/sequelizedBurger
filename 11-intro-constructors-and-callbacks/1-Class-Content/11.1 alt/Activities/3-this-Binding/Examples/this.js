// ----------------------- SECTION 1


function Person(firstName, lastName) {

  // Before you uncomment...What will this print?
  console.log(this);

  this.firstName = firstName;

  this.lastName = lastName;

}

// ----------------------- SECTION 2

// Let's use our Person constructor.
var vader = new Person("Anakin", "Skywalker");

// ...Define a useful function...
var introduce = function() {
  console.log(this.firstName + this.lastName);
};

// ...And attach it to Lord Vader.
vader.introduce = introduce;

// Before you uncomment...What will this print?
// vader.introduce();

// Before you uncomment...What will happen here?
//   How can we enable warnings for this kind of thing?
// introduce();

// ----------------------- SECTION 3

// Before you uncomment...What will happen here?
// console.log(this.toString());

// ----------------------- SECTION 4

// JavaScript has two built-in functions, called call and apply. They let you
// CALL or APPLY a function defined on any object, and MANUALLY set the value
// of this.

// In other words, they allow you to call/apply any method on any object, and
// manually control the "calling context".

// First, let's create a new Person.
var obiWan = new Person("Obi-Wan", "Kenobi");

// Does Obi-Wan have an introduce method? What should this print?
console.log(obiWan.introduce);

// We can use call to "borrow" Lord Vader's method. The syntax is:
//   { function }.call({ your this value })

// Before you uncomment...What will this print?
// vader.introduce.call(obiWan);

// In this case, apply does the same thing.
// vader.introduce.apply(obiWan);

// ----------------------- SECTION 5

// At this point, you're surely wondering how call and apply differ. If you're
// curious, though, do some research, and share what you learn with your
// partner.

// Then, as your bonus. Write a function that allows a Person object to set its
// own phone_number property; attach it to Vader; and call it on obiWan.
// Next, do the same thing, but using apply instead.
