var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]).toFixed(1);
var B = parseFloat(lines[1]).toFixed(1);

var media = (A*3.5 + B*7.5)/(3.5+7.5);

console.log(`MEDIA = ${media.toFixed(5)}`);