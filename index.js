var request = require('request'),
    cheerio = require('cheerio');


module.exports = {
  fullList: function() {
    // This is the basline URL from Wikipedia
    var url = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies';
    // Sadly, trying to get the css selector to work without this
    // Once I see the start of the second table of changes to the S&P,
    // stop processing
    var isPastList = false;

    // Go grab the webpage
    request(url, function(err, resp, body){
      // Get cheerio started
      $ = cheerio.load(body);
      // Sep, 2015 - There are two tables on the page with data
      $('wikitable sortable, tr td:first-child').each(function(i, element) {
        // If I see the start of the second table, stop adding to the list
        if($(this).text().indexOf("Date") > -1 ) {
          isPastList = true;
        }
        if(!isPastList) {
          // Then we are in the list of S&P stocks, keep going
          console.log($(this).text());
        }
      });
    });
  },

  testIt: function() {
    console.log("yes?");
  }
};
