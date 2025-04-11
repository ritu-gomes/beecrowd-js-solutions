var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var age = parseInt(lines[0]);

    var years = Math.floor(age/365);

    var months = Math.floor((age % 365)/30);

    var days = (age % 365) % 30;

console.log(`${years} ano(s)
${months} mes(es)
${days} dia(s)`);