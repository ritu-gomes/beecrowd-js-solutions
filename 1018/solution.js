var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseInt(lines[0]);
var remainder = 0;

    var hundreds = Math.floor(number/100);
    remainder = number % 100;

    var fiftys = Math.floor(remainder/50);
    remainder = remainder % 50;

    var twentys = Math.floor(remainder/20);
    remainder = remainder % 20;

    var tens = Math.floor(remainder/10);
    remainder = remainder % 10;

    var fives = Math.floor(remainder/5);
    remainder = remainder % 5;

    var twos = Math.floor(remainder/2);
    remainder = remainder % 2;

    var ones = Math.floor(remainder/1);

console.log(`${number}
${hundreds? hundreds: 0} nota(s) de R$ 100,00
${fiftys? fiftys: 0} nota(s) de R$ 50,00
${twentys? twentys: 0} nota(s) de R$ 20,00
${tens? tens: 0} nota(s) de R$ 10,00
${fives? fives: 0} nota(s) de R$ 5,00
${twos? twos: 0} nota(s) de R$ 2,00
${ones? ones: 0} nota(s) de R$ 1,00`);