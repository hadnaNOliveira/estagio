var T1 = Number(prompt("Insira a primeira nota:"))
var T2 = Number(prompt("Insira a segunda nota:"))
var P1 = Number(prompt("Insira a terceira nota:"))

var n1 = T1
var n2 = T2
var n3 = P1

var result = ((n1 + n2 + n3)/3)

if (result < 5) {
    alert("Infelizmente, você não foi aprovado")
}
if (result >= 5 && result < 7) {
    alert("Você está em recuperação")
}
if (result >= 7) {
    alert("Parabéns, você foi aprovado!")
}