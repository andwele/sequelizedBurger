# Week of 19 HW: NYT React Search

### Overview

In this activity, you'll create a new React-based rendition of the New York Times Article Search application. This assignment requires you to create React components, work with helper functions, and utilize the React mounting lifecycle to query and display articles based on user searches. You'll also use Node, Express and MongoDB so that users can save articles to read later. You will be fully capable of completing this application by the end of 19.3.

### Instructions

1. [Check out this mockup image](HW_Assignment.png). This explains how your site's components should function.

2. Create a MongoDB database called `nytreact`.

3. Using mongoose, then create an Article schema and model

4. Articles should have each of the following fields:

   * `title` (Title of the stored article from nytimes.com)

   * `date` (publish date and time of the article)

   * `url` (URL of the article on nytimes.com)

   * Creating `documents` in your `articles` collection similar to  
     ```js
     {
       title: 'Ali Sells Jersey House And Moves to Chicago',
       date: '1974-07-18T00:00:00Z',
       url: 'http://query.nytimes.com/gst/abstract.html?res=9A0DE5D8173FEF34BC4052DFB166838F669EDE'
     }
     ```

5. Create a Node/Express/Handlebars/MongoDB/ReactJS app called `nytreact`. This will be a recreation of the [NYT Articles Search](http://nytarticle-search.herokuapp.com/) exercise application we built back in [Week 6](/02-lesson-plans/06-ajax/2-Key-Activities/06-NYTSearch). Running this application will:

   * Create a Bootstrap layout similar to that displayed in [HW_Assignment.png](HW_Assignment.png). This should be a SPA (Single Page Application) that uses [`react-router`](https://github.com/reactjs/react-router) to navigate, hide and show your React components without changing the route within Express.

     * If you want to try out another CSS framework, feel free to use an alternative to Bootstrap.

   * You'll need several Express routes for your app:

     ```
     * `/api/saved` (get) - your components will use this to query MongoDB for all saved articles

     * `/api/saved` (post) - your components will use this to save an article to the database

     * `/api/saved` (delete) - your components will use this to delete a saved article in the database

     * `*` (get) - will load your single HTML page (with ReactJS) in public/index.html. Make sure you put this after all other GET routes
     ```

   * The layout should include three React Components named `Main`, `Search` and `Saved`.

     ```
     * **Main** - contains the main-container div that holds the main layout and navigation. This component should also be able to hold sub-components Search and Saved

     * **Search** - queries the NYT API for articles. Displays API search results from another possible **Query** component and **Results** component. Gives the user the ability to save an article to their Saved Articles.

     * **Saved** - displays the Saved Articles that were searched and stored in the database
     ```

- - -

### Bonus Live Updates to Saved Articles

* Use React routing and [socket.io](http://socket.io) to create a notification or a component that triggers whenever a user saves an article. Your message should include the title of the saved article.
  * Say you have multiple browsers open, each one visiting your site. If you save an article in one browser, then all of your browsers should notify you that a new article was saved.
  * [Socket.io NPM package](https://www.npmjs.com/package/socket.io)

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.
