

// First, define the Person constructor.
function Person() {
  if (!(this instanceof Person)) {
    return new Person();
  }


  this.breathes = true;
}

function User(firstName, lastName, email) {

  if (!(this instanceof User)) {
    return new User(firstName, lastName, email);
  }

  Person.apply(this, arguments);

  this.firstName;

  this.lastName;

  this.email;
}


//  Then, set the User's prototype equal to a new Person.
User.prototype = new Person();

// Testing this should work swimmingly.
console.log(new User("Jane", "Doe", "jane@doe.com") instanceof Person);

function Admin(firstName, lastName, email) {

  if (!(this instanceof Admin)) {
    return new Admin(firstName, lastName, email);
  }

  User.apply(this, arguments);

  this.admin = true;
}

// First reset prototype...
Admin.prototype = new User();

// ...Then add protoype methods.
Admin.prototype.demote = function demote() {
  this.admin = false;
};
