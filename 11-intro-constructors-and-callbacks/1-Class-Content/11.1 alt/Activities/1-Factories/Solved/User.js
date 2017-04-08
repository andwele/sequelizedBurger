function User(first_name, last_name, email) {

  var o = {};

  // Set o's first_name...
  o.first_name = first_name;

  // Set o's last_name...
  o.last_name = last_name;

  // Set o's email...
  o.email = email;

  // Return the object
  return o;
}

console.log(User("Fred", "Hampton", "fred@hampton.com"));
