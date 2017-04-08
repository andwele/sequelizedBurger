function User(first_name, last_name, email) {

    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;

    console.log('USER CONSTRUCTOR', this);
}

// But we must cal lthis function with new in front!
console.log('NEW USER:', new User("Peleke", "Sengstacke", "peleke@syntax.tech"));

// If we don't...
var peleke = new User("Peleke", "Sengstacke", "peleke@syntax.tech");

// ...Our variable doesn't initialize...
console.log('USER', peleke); // undefined

/* ...And we pollute the global namespace. These should all be undefined.
 *   In strict mode, JavaScript throws an error when you do this.
 *   This is one of the many reasons not to forget to 'use strict'! */
console.log(global.first_name); // 'Peleke'
console.log(global.last_name); // 'Sengstacke'
console.log(global.email); // 'peleke@syntax.tech'