// 1) Crie uma função que inverta um número; 
// (NÃO pode usar a função revert())
// Exemplo: minhaFuncao(370914) // retorno esperado: 419073;

function invertaNumero(numero){
    
    if(typeof numero !== 'number'){
        return 'Passe um número válido';
    }

    var numeroInvertido = [];
    var numeroArray = numero.toString().split('');
        
    for(let i= numeroArray.length - 1; i>=0; i--){
        numeroInvertido.push(numeroArray[i]);
    }


    return Number.parseInt(numeroInvertido.join(''),10);
}

invertaNumero(123456);
invertaNumero('teste');