/* Scraper: Server #2  (18.2.1)
 * ========================= */

// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");


// First, tell the console what server2.js is doing
console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            "from the NHL website:" +
            "\n******************************************\n");


// Making a request call for nhl.com's homepage
request("https://www.nhl.com/", function(error, response, html) {

  // Load the body of the HTML into cheerio
  var $ = cheerio.load(html);

  // Empty array to save our scraped data
  var result = [];

  // With cheerio, find each h4-tag with the class "headline-link"
  $("h4.headline-link").each(function(i, element) {

    // Save the text of the h4-tag as "title"
    var title = $(this).text();

    // Find the h4 tag's parent a-tag, and save it's href value as "link"
    var link = $(element).parent().attr("href");

    // For each h4-tag, make an object with data we scraped and push it to the result array
    result.push({
      title: title,
      link: link
    });

  });

  // After the program scans each h4.headline-link, log the result
  console.log(result);
});
