function colocaPrimeiraLetraEmMaiusculo(frase){
    if(typeof frase !=='string' || !frase.length){
        return "O parâmetro deve ser uma string!";
    }

    // transforma a string frase em um array, separado por palavra;
    var arrayFrase = frase.trim().split(' ');

    for(let i=0; i< arrayFrase.length;i++){
        
     arrayFrase[i] = arrayFrase[i][0].toUpperCase() + arrayFrase[i].substr(1).toLowerCase();
    }

    return arrayFrase.join(' ');
 }

 colocaPrimeiraLetraEmMaiusculo('nossa dupla é demais');
 colocaPrimeiraLetraEmMaiusculo();
 colocaPrimeiraLetraEmMaiusculo('');
 colocaPrimeiraLetraEmMaiusculo(44);