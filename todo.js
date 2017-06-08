function User(first_name, last_name, email) {

  this.first_name = first_name;
  this.last_name = last_name;
  this.email = email;
}
  console.log(this);
  console.log(new User("Michael", "Hill", "mike.hill.42@gmail.com" ));
