**INSTRUCTIONS:**

  The goal of this exercise is to modify the Post and Author models so that they are associated with each other.

  1) Open the 3-Post-Author-Association/UNSOLVED folder.

  2) Run `npm install`

  3) Open the `config` folder and update the `config.json` file's `development` object to match your own local MySQL database.

  4) Navigate to the `post.js` file.

  5) You will need to pass in a configuration object as a third argument into the `sequelize.define` method in order to set up a relation. There's an example of this being done with a **belongsTo** association here: 
  <http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelstaskjs>

  * This may take a few tries to implement correctly in your own Post model (There's a lot of curly braces there!). You can verify your code works by starting your node server and then checking MySQL Workbench. If the Posts table now has a foreign key of AuthorId, you were successful.

  **Bonus**: If you complete the exercise before time's up, navigate to the author.js file and add a **hasMany** association from the Author model to the Post Model. A perfect example can be found here: 
  <http://docs.sequelizejs.com/en/1.7.0/articles/express/#modelsuserjs>

  **Note** After this activity we have just one more step to complete the app and get it fully functioning.