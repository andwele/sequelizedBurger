
// Instructors :: Run this in the browser console.
// Let's start with a user, again.
var user = {
  first_name: "Bigfoot",
  last_name: "Johnson",
  email: "brother.big.foot@wow.com"
};

// If user only had properties we defined, this would throw a ReferenceError.
console.log(user.toString());

// ...But it doesn't. That's because user has something called a prototype.
//   If you access a property on user that it doesn't have, JavaScript checks
//   if it exists user's prototype.
//
//   You can use Object.getPrototypeOf to retrieve an object's prototype.
var userPrototype = Object.getPrototypeOf(user);

console.log("The prototype of user is " + userPrototype);

// ...Hm. That's useless. If you want to see *all* properties on an object,
//   you have to use Object.getOwnPropertyNames.
console.log(Object.getOwnPropertyNames(userPrototype));

// Let's see what happens if we call something that doesn't exist on the
//   prototype, either.
// user.introduce();

// ...Annnd it dies. Comment that line out-let's fix that before we try again.
//   Attach an introduce function to user's prototype...
userPrototype.introduce = function introduce() {
  console.log("Hi! My name is " + this.first_name + " " + this.last_name + "!");
};

// ...Et voila.
user.introduce();