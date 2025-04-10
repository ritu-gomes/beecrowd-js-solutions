var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var time = parseInt(lines[0]);
var speed = parseInt(lines[1]);

var distance = time * speed;

var fuel = (distance / 12);

console.log(fuel.toFixed(3));