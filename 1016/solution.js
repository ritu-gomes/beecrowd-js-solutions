var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines[0]);

var timeInMinuts = 2 * distance;

console.log(`${timeInMinuts} minutos`);