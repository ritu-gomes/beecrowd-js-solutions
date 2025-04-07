var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var distance = parseInt(lines[0]);
var fuel = parseFloat(lines[1]).toFixed(1);

var averageFuel = (distance / fuel).toFixed(3);

console.log(`${averageFuel} km/l`);