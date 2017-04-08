function User(firstName, lastName, email) {

  // Ensure users get the result of a new call, even if they forget.
  if (!(this instanceof User)) {
    return new User(firstName, lastName, email);
  }

  // Otherwise, proceed as usual.
  this.firstName = firstName;

  this.lastName = lastName;

  this.email = email;
}

// Behaves as expected with new...
console.log("Called with new: " + (new User("John", "Doe", "john@doe.com") instanceof User));

// ..And just the same result without.
console.log("Called with new: " + (User("John", "Doe", "john@doe.com") instanceof User));

// ===========================================================================

function Admin(firstName, lastName, email) {

  if (!(this instanceof Admin)) {
    return new Admin(firstName, lastName, email);
  }

  // Hm...Feels like we're repeating ourselves, doesn't it?
  this.firstName = firstName;

  this.lastName = lastName;

  this.email = email;

  this.admin = true;
}

var admin = new Admin("Jane", "Doe", "jane@doe.com");

console.log(admin);

// ===========================================================================

function Admin(firstName, lastName, email) {

  if (!(this instanceof Admin)) {
    return new AdminSafe(firstName, lastName, email);
  }

  // Delegating to User is much more compact.
  User.apply(this, arguments);

  this.admin = true;
}

var admin = new Admin("Darth", "Maul", "maul@sith.evil");

// What did you expect? What did you get? What line is the bug on?
console.log(admin);
console.log("Instance of Admin: " + (admin instanceof Admin));
console.log("instance of User: " + (admin instanceof User));

// We want our Admin to be an instance of both Admin AND User.
// There's a solution to this, which uses the mysterious prototype property.
// Curious? We'll cover it next time
Admin.prototype = new User();

admin = new Admin("Darth", "Maul", "maul@sith.evil");

// Boom. Exactly what we want.
console.log(admin);
console.log("Instance of Admin: " + (admin instanceof Admin));
console.log("instance of User: " + (admin instanceof User));
