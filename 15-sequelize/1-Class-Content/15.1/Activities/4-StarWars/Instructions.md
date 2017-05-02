**Instructions**
* Using the instructions in server.js, reconfigure the Star Wars app to use the Sequelize ORM.
  * If you need help, refer to the previous example for guidance.

*STEPS TO SEQUELIZE THE STAR WARS APP.*
 1. Delete the orm from config. In your app folder, create a model folder with a character.js file in the model
 2. In character.js, model out the character table, as detailed in the schema.sql file located in the root of this project directory.
 3. Remove all references to the old orm file, and replace it with character.js
 4. Use Sequelize methods in place of the orm calls to retrieve and insert data.
 5. Update connection.js to use sequelize instead of the mysql package.