var msg = prompt("Você confirma o envio de seus dados?")

if (msg.toLowerCase() === "sim") {
    alert("Parabéns!")
}
else if (msg.toLowerCase() === "não" || msg.toLowerCase() === "nao") {
    result = prompt("Qual o motivo do cancelamento?")
    alert(result)
}
else {
    alert("Você tem noções dos seus atos?")
}