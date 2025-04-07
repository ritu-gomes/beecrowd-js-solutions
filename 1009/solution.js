var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var sellerName = lines[0];
var fixedSalary = parseFloat(lines[1]);
var earnedSalary = parseFloat(lines[2]);

var totalSalary = fixedSalary + (earnedSalary * 0.15);

console.log(`TOTAL = R$ ${totalSalary.toFixed(2)}`);