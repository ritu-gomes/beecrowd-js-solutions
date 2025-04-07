var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var radius = parseFloat(lines[0]).toFixed(2);

var volum = (4/3.0)*3.14159*radius*radius*radius;
console.log(`VOLUME = ${volum.toFixed(3)}`);