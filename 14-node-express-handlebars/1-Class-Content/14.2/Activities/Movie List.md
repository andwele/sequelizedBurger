### 12. Everyone Do: Movie List (20 minutes)

  * **Instructions**

    * Create a full-stack application with Express, MySQL and Handlebars.

      * HINT: this web application will be very similar to the app your instructor just demonstrated and slacked out. Please feel free to leverage that code when creating this code.

    * Create a `schema.sql` file. Inside of that file, do the following:

      1. Make a database called moviePlannerDB

      2. Inside of that database make a movies table which will contain a movie column and an id column. The id will be automatically incremented while also being the primary key.

      3. Run your `schema.sql` file within MySQL Workbench before moving onto the next steps.

    * In your server.js file, you will create four routes: `get`, `post`, `put`, and `delete`.

      * Render all of the movies from the movies table when the `'/'` get route is hit.

      * Show a delete button next to each movie. Each delete button will be in a form and, when clicked, will delete the movie to which it is attached from your database. Remember to use a DELETE method for it.

      * Additionally, show the form that the user can use to add a movie to be watched. The form will post to the `'/'` route, which will insert the movie from the form into the movies table and which will redirect the user back to the `'/'` get route.

      * Have another form that will update a movie in the movies table. The form will include two inputs: an id input and a movie title input. Remember to leverage a PUT method.