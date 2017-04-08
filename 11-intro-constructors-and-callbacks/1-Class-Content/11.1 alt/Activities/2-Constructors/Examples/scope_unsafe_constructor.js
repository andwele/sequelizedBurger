function User(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    console.log(this);
}

// Call User without new...
User("Jeremy", "Panda");

// ...Pollutes the global namespace.
console.log("global.first_name is: " + global.first_name);
console.log("global.last_name is: " + global.last_name);