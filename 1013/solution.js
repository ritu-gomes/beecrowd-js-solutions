var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var [a, b, c] = lines[0].split(" ").map(Number);

var maiorAB = (a + b + Math.abs(a - b)) / 2;
var maior = (maiorAB + c + Math.abs(maiorAB - c)) / 2;

console.log(`${maior} eh o maior`);