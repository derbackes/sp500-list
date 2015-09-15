S&P 500 Stock List
=====

## Installation
npm install sp500-list

## Usage
var spList = require('sp500-list');  
spList.fullList(callback);

That's it. It will return a JS object formatted:  
[{ ticker: 'AAPL'},  
{ticker: 'GOOG'},  
{ticker: 'MMM'}]  

But with all 500 ticker symbols

## Example

This will grab stock quotes from Yahoo Finance for the entire S&P 500
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
## Release History
1.0 - Getting it up and running. Stick requires a better css selector 
