var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(" ").map(parseFloat);

const pi = 3.14159;

const triangleArea = (A * C) / 2;
const circleArea = pi * C * C;
const trapeziumArea = ((A + B) * C) / 2;
const squareArea = B * B;
const rectangleArea = A * B;

console.log(`TRIANGULO: ${triangleArea.toFixed(3)}`);
console.log(`CIRCULO: ${circleArea.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapeziumArea.toFixed(3)}`);
console.log(`QUADRADO: ${squareArea.toFixed(3)}`);
console.log(`RETANGULO: ${rectangleArea.toFixed(3)}`);