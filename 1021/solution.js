var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var number = parseFloat(lines[0]);
var noteAndCoin = [100, 50, 20, 10, 5, 2, 1, .50, .25, .10, .05, .01];
var cashCount = [];

for(let i = 0; i < noteAndCoin.length; i++){
    cashCount.push(Math.floor(number/noteAndCoin[i]));
    number = (number % noteAndCoin[i]).toFixed(2);
}

console.log(`NOTAS:
${cashCount[0]} nota(s) de R$ 100.00
${cashCount[1]} nota(s) de R$ 50.00
${cashCount[2]} nota(s) de R$ 20.00
${cashCount[3]} nota(s) de R$ 10.00
${cashCount[4]} nota(s) de R$ 5.00
${cashCount[5]} nota(s) de R$ 2.00
MOEDAS:
${cashCount[6]} moeda(s) de R$ 1.00
${cashCount[7]} moeda(s) de R$ 0.50
${cashCount[8]} moeda(s) de R$ 0.25
${cashCount[9]} moeda(s) de R$ 0.10
${cashCount[10]} moeda(s) de R$ 0.05
${cashCount[11]} moeda(s) de R$ 0.01`);
