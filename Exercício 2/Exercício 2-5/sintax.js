var inicial = 1000
var nome = "Fernanda" 

for (var ano = 2017; ano <= 2021; ano++) {
    if (ano > 2016 && ano < 2018) {
        result = inicial + (inicial*0.015)
    }
    else {
        result = result + ((inicial*0.015)*2)
    }
}
alert(`O salário atual de ${nome} é de R$: ${result}`)