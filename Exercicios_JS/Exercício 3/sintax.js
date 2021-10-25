var msg = prompt("Hoje é sexta-feira?").trim();
var isValueEmpty = msg === null || msg === undefined || msg === "";

var isFriday = false;

if (!isValueEmpty) {
    isFriday = msg.toLowerCase() === "sim";
}; 

var isTwoGreaterThanFour = 2 > 4;

console.log("Hoje é sexta-feira?", isFriday);
console.log("2 > 4?", isTwoGreaterThanFour);
console.log("A resposta estava vazia?", isValueEmpty);
