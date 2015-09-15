Examples
========

```
var spList = require('sp500-list'),  
    yahooFinance = require('yahoo-finance');  
var myCallback = function(stockList) {    
        stockList.forEach(function(i)  {  
                console.log(i['ticker']);  
                yahooFinance.snapshot({  
                        symbol: i['ticker'],  
                        fields: ['s', 'n', 'd1', 'l1', 'y', 'r'],  
                }, function(err, snapshot) {  
                        console.log(snapshot);  
                });  
        });  
};  

spList.fullList(myCallback);
```
