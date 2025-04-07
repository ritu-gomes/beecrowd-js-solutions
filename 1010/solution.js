var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var firstProduct = lines[0];
var secondProduct = lines[1];

var firstProductArray = firstProduct.split(" ");
var secondProductArray = secondProduct.split(" ");

var payableAmount =( parseInt(firstProductArray[1])
    *parseFloat(firstProductArray[2]).toFixed(2))
    +
   ( parseInt(secondProductArray[1])
    *parseFloat(secondProductArray[2]).toFixed(2));
    console.log(`VALOR A PAGAR: R$ ${payableAmount.toFixed(2)}`);