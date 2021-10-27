// 1) Crie uma função que receba uma string e retorne a maior palavra dentro da string 
//    // exemplo: minhaFuncao( 'Eu adoro Javscript' ) => retorna 'Javascript'

function minhaFuncao(frase) {
    var arrayPalavras = frase.trim().split(' ');
    console.log(arrayPalavras)
    var maximo = 0
    var posicao = 0

    for(i = 0; i < arrayPalavras.length; i++) {
        if (arrayPalavras[i].length > maximo) {
            maximo = arrayPalavras[i].length;
            posicao = i;
            console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} máximo: ${maximo} \n posição no array ${posicao} - ALTEROU MÁXIMO`)
        }
        console.log(`iteração ${i} \n palavra ${arrayPalavras[i]} \n - NÃO alterou máximo`)
    }
    return arrayPalavras[posicao]
}
minhaFuncao('Eu adoro Javascript')
