var spList = require('../');

var myCallback = function(stockList) {
        stockList.forEach(function(i)  {
                if(i['ticker'].trim()) {
                        console.log(i['ticker']);
                        console.log(i);
                } else {
                        console.log('Empty Ticker');
                }
        });
};

spList.fullList(myCallback);
