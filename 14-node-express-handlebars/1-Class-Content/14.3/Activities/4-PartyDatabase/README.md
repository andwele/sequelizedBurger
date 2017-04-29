  * **Instructions**

    * You will be creating a holiday party planner application. Many different kinds of holidays are celebrated around the world, and we want to help create parties for our clients whilst also keeping track of all the events we host. In MySQL create a database called `holiday_party_db` with two tables structured like the tables below.

      | id | party_name              | party_type | party_cost | client_id |
      | -- | ----------------------- | ---------- | ---------- | --------- |
      | 1  | Everybody Loves Raymond | tv         | 500        | 1         |
      | 2  | Big Bang Theory         | tv         | 900        | 1         |
      | 3  | Top Gun                 | movie      | 200        | 2         |
      | 4  | Whiskey                 | grown-up   | 300        | 2         |
      | 5  | Cigar                   | grown-up   | 250        | 3         |

      | id | client_name |
      | -- | ----------- |
      | 1  | Bilal       |
      | 2  | Brianne     |
      | 3  | Vincent     |

    * Create a Node MySQL application with an ORM that executes once the server is launched.

    * You will not need Express or Handlebars for this assignment. Use `console.log` to print the data collected to the console.

    * Create a MySQL database with the tables and data which were slacked out to you.

    * Create a Node app and connect it to MySQL with a `config` folder and with a `connection.js` file inside of that folder.

    * Create an `orm.js` file, and make an ORM that will do the following:

      * Find all parties, ordering them by party cost
      * Find partie15.s by the name of the party
      * Find the client with the most parties

    * BONUS: create a function within your ORM that will let the user add more clients and parties to the database.