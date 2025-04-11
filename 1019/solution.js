var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var remainder = 0;

    var hours = Math.floor(number/3600);
    remainder = number % 3600;

    var minuts = Math.floor(remainder/60);
    remainder = remainder % 60;

    var seconds = remainder;

console.log(`${hours}:${minuts}:${seconds}`);