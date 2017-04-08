# Weather Admin Architecture

### Components

* CLI

  * The CLI determines whether the user is an **admin** or a **user**, and configures the application accordingly.

* WeatherAdmin

  * The WeatherAdmin component encapsulates two functions.

    * `getData`, which retrieves the list of all searches users have made thusfar; and

    * `newUserSearch`, which runs a search on behalf of a user.

* UserSearch

  * The UserSearch component allows users to search for the weather in a given location.

* log.txt

  * This is simply a file we'll use to keep track of all searches users have run. We'll use this in place of a database.
