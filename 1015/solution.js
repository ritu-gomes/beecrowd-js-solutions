var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [x1, y1] = lines[0].split(" ").map(parseFloat);
var [x2, y2] = lines[1].split(" ").map(parseFloat);


var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distance.toFixed(4));