var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines[0]); // Read first integer
var B = parseInt(lines[1]); // Read second integer
var X = A + B; // Compute sum

console.log(`X = ${X}`); // Print the result in the required format