// 1) Crie uma função que recebe como parâmetro uma lista com os valores 
// [1, 'Olá', undefined, 99999, 'Texto qualquer']
//    e essa função imprima no console o valor de cada elemento da lista;

var lista = [1, 'Olá', undefined, 99999, 'Texto qualquer'];

function imprimir(imprimirLista) {

    for(let i = 0; i < imprimirLista.length; i++)
    console.log(imprimirLista[i]);
}
imprimir(lista);