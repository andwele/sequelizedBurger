function User(firstName, lastName, email) {

  if (!(this instanceof User)) {
    return new User(firstName, lastName, email);
  }

  this.firstName;

  this.lastName;

  this.email;
}

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
