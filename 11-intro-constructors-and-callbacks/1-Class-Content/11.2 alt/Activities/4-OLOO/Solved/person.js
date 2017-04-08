var Logger = {
  log: function(message) {
    console.log(message);
  }
};

var Person = Object.create(Logger);
Person.breathes = true;

var User = Object.create(Person);
User.init_user = function(firstName, lastName, email) {
  this.firstName = firstName;

  this.lastName = lastName;

  this.email = email;

  return this;
};


var Admin = Object.create(User);
Admin.init_admin = function(firstName, lastName, email) {
  // Accessible because Admin's prototype is User!
  this.init_user(firstName, lastName, email);

  this.admin = true;

  return this;
};

Admin.demote = function demote() {
  this.admin = false;
};
  // ===

var jane = Object.create(Admin);

// Defined on Jane
jane.init_admin("Jane", "Doe", "jane@doe.com");
jane.demote();
console.log(jane.admin);

// Delegated to Person
console.log(jane.breathes);

// Delegated to Logger; property defined on User.
jane.log(jane.firstName);
