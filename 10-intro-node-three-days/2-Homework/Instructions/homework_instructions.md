# Week 10 (LIRI Bot)

### Overview

In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a _Language_ Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

### Before You Begin

1. LIRI will display your latest tweets. If you don't already have an account on Twitter, make one and post a few tweets about your latest projects.

2. Make a new GitHub repository called liri-node-app and clone it to your computer.

3. Make a .gitignore file and add the following lines to it.

```
npm-debug.log
node_modules
.DS_Store
```

4. In your git or bash terminal, create a node app using `npm`

```
cd liri-node-app
npm init
```

You will be prompted for several values. You are recommended to accept each default (press enter or return to each prompt). Once complete you will see a message like this:

```
name: (liri-node-app)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository: (https://github.com/username/liri-node-app.git)
keywords:
author:
license: (ISC)

About to write to /your/project/path/package.json:
{
  "name": "liri-node-app",
  "version": "1.0.0",
  "description": "liri-node-app",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/username/liri-node-app.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/username/liri-node-app/issues"
  },
  "homepage": "https://github.com/username/liri-node-app#readme"
}


Is this ok? (yes)
```


5. Next, you will create a heroku app from your git bash or terminal. Make sure you're in your git project folder `liri-node-app`

 ```
 heroku create
 ```

6. To retrieve the data that will power this app, you'll need to send requests to the Twitter, Spotify and IMDB APIs. You'll find these Node packages crucial for your assignment.

   * [Twitter](https://www.npmjs.com/package/twitter)
   * [Spotify](https://www.npmjs.com/package/spotify)
   * [Request](https://www.npmjs.com/package/request)
     * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com).

7. Get your Twitter API keys by following these steps:

   * Step One: Visit <https://apps.twitter.com/app/new>
   * Step Two: Fill out the form with dummy data. Type `http://google.com` in the Website input. Don't fill out the Callback URL input. Then submit the form.
   * Step Three: On the next screen, click the Keys and Access Tokens tab to get your consumer key and secret.
     * Copy and set these values as [Heroku Config Vars](https://devcenter.heroku.com/articles/config-vars) using the following command within your project folder
     * `heroku config:set CONSUMER_KEY=yourconsumerkey CONSUMER_SECRET=yourconsumersecret`
   * Step Four: At the bottom of the page, click the `Create my access token` button to get your access token key and secret.
     * Copy and set these values as [Heroku Config Vars](https://devcenter.heroku.com/articles/config-vars) using the following command within your project folder
     * `heroku config:set ACCESS_TOKEN_KEY=youraccesstokenkey ACCESS_TOKEN_SECRET=youraccesstokensecret`

8. export HEROKU_CONFIG=$(heroku config --json)

### Instructions

IMPORTANT: You are keeping your twitter keys secure with Heroku. In order to run Liri locally, you will need to first get your keys from heroku with this command:

```
export HEROKU_CONFIG=$(heroku config --json)
```

1. Make a JavaScript file named `keys.js`.

Inside keys.js your file will look like this:

```JavaScript
console.log('this is loaded');

var config = JSON.parse(process.env.HEROKU_CONFIG);

exports.twitterKeys = {
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token_key: config.ACCESS_TOKEN_KEY,
  access_token_secret: config.ACCESS_TOKEN_SECRET,
}
```

2. Make a file called `random.txt`.

   * Inside of `random.txt` put the following in with no extra characters or white space:
     * spotify-this-song,"I Want it That Way"

3. Make a JavaScript file named `liri.js`.

4. At the top of the `liri.js` file, write the code you need to grab the data from keys.js. Then store the keys in a variable.

5. Make it so liri.js can take in one of the following commands:

   * `my-tweets`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`


### What Each Command Should Do

1. `node liri.js my-tweets`

   * This will show your last 20 tweets and when they were created at in your terminal/bash window.

2. `node liri.js spotify-this-song '<song name here>'`

   * This will show the following information about the song in your terminal/bash window
     * Artist(s)
     * The song's name
     * A preview link of the song from Spotify
     * The album that the song is from

   * if no song is provided then your program will default to
     * "The Sign" by Ace of Base

3. `node liri.js movie-this '<movie name here>'`

   * This will output the following information to your terminal/bash window:

     ```
       * Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.
       * Rotten Tomatoes Rating.
       * Rotten Tomatoes URL.
     ```

   * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
     * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
     * It's on Netflix!

4. `node liri.js do-what-it-says`
   * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     * Feel free to change the text in that document to test out the feature for other commands.

### BONUS

* In addition to logging the data to your terminal/bash window, output the data to a .txt file called `log.txt`.

* Make sure you append each command you run to the `log.txt` file. 

* Do not overwrite your file each time you run a command.

* Implement the input gathering with inquirer rather than process.argv.

- - -

### One More Thing

If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

**Good Luck!**

## Copyright

Coding Boot Camp (C) 2016. All Rights Reserved.