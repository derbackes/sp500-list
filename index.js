var request = require('request'),
    cheerio = require('cheerio');


module.exports = {
  fullList: function(callback) {
    // This is the basline URL from Wikipedia
    var url = 'https://en.wikipedia.org/wiki/List_of_S%26P_500_companies';
    // Sadly, trying to get the css selector to work without this
    // Once I see the start of the second table of changes to the S&P,
    // stop processing
    var isPastList = false;

    // Go grab the webpage
    var returnList = request(url, function(err, resp, body){
      if (!err && resp.statusCode == 200) {

        // The array of stocks
        var stockList = [];

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
            //console.log($(this).text());
            // Double check that it is not empty
            if($(this).text().trim()) {
              var data = {
                ticker: $(this).text()
              };
              stockList.push(data);
            }
          }
        });
        //console.log(stockList);
        callback(stockList);
      } else {
        callback(null, err);
      }

    });
  },

  testIt: function() {
    console.log("yes?");
  }
};
