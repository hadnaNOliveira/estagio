var n1 = prompt("Insira um número:")
var n2 = prompt("Insira um segundo número:")

function soma(n1, n2, Callback) {
    
    if (typeof n1 === 'number' && n1.toString() !== 'NaN'
    && typeof n2 === 'number' && n2.toString() !== 'NaN') {
       var result = n1 + n2
    }
    else {
        Callback = alert("Algum número digitado foi inválido")
    }

    console.log(result)
}
soma()
