var n1 = Number(prompt("Insira um valor:"))
var opt = prompt("Informe a operação desejada")
var n2 = Number(prompt("Insira um valor:"))


var value1 = n1
var value2 = n2 

if(opt === "+") {
    var resultado = n1 + n2
    alert(resultado)
}
if (opt === "-") {
    var resultado = n1 - n2
    alert(resultado)
}
if (opt === "*") {
    var resultado = n1 * n2
    alert(resultado)
}
if (opt === "/") {
    var resultado = n1 / n2
    alert(resultado)
}
else if (opt !== "+" && opt !== "-" && opt !== "/" && opt !== "*") {
    prompt("Por favor, insira um operador válido")
}
