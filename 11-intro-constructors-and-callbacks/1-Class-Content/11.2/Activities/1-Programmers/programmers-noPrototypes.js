// constructor function used to create programmer objects
function Programmer(name, position, age, language) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.language = language;
  // creates the printInfo method and applies it to all programmer objects
  this.printInfo = function() {
    console.log("Name: " + this.name + "\nPosition: " + this.position +
    "\nAge: " + this.age + "\nLanguages: " + this.language);
  };
}

// new programmer object is initialized to bob and is provided with the variables necessary
// to create all of the properties
var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");

// calls the printInfo method for bob to print all of his information to the console
bob.printInfo();
