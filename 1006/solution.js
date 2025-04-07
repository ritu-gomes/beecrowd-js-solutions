var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines[0]).toFixed(1);
var B = parseFloat(lines[1]).toFixed(1);
var C = parseFloat(lines[2]).toFixed(1);

var media = ((A*2)+(B*3)+(C*5))/(2+3+5);

console.log(`MEDIA = ${media.toFixed(1)}`);