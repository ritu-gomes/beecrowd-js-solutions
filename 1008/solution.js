var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var workHourPerMonth = parseInt(lines[1]);
var salaryPerHour = parseFloat(lines[2]);

var salary = workHourPerMonth*salaryPerHour;

console.log(`NUMBER = ${number}
SALARY = U$ ${salary.toFixed(2)}`);