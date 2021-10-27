function segundoMenorESegundoMaior(array){

    if(typeof array !=='object' || !array.length || array.some(element => typeof element !=='number')){
        return 'insira um array de números';
    }

    for(let i=0; i< array.length;i++){
        for(let j = i+1; j < array.length;j++){
            if(array[i] > array[j]){
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }

    }

    var segundoMenor = array[1];
    var segundoMaior = array[array.length - 2];

    console.log(`segundo menor ${segundoMenor}; segundo maior ${segundoMaior}`);
}

segundoMenorESegundoMaior( [1, 3, 5, 7, 9] );
segundoMenorESegundoMaior('teste');
segundoMenorESegundoMaior([1,2,'teste',4]);