  * **Instructions**

    * Add a delete button into the `index.handlebars` file next to each cat.

    * Add on to the following:

      * The ORM to include a delete key and function
      * The cat model to include a delete key and function that uses the ORM
      * The `catsController.js` file to have a `/:id` delete route, to call the delete key of the cat model, and to pass in arguments as necessary