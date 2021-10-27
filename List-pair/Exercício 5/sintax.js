// 2) Crie uma função que receba uma string e retorna a quantidade de vogais na string;

function funcaoVogal(string) {
    var arrayVogais = string.trim().split('');
    console.log(arrayVogais)
    var numero = 0

    for(i=0; i < arrayVogais.length; i++) {
        let letra = arrayVogais[i]
        if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
            numero += 1
        }
    }
    return numero
}
funcaoVogal('aaaaaaaabcdef')