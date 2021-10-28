function funcaoContarLetras(string) {
    var arrayVogais = string.trim().replace(/[^a-zA-Z]/g,"").toLowerCase().split('');
    
    var vogais = 0;
    var consoantes = 0;
    
    for(var i=0; i < arrayVogais.length; i++) {
    let letra = arrayVogais[i]
    if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    vogais += 1;
    } else {
    consoantes += 1;
    }
    }
    
    return `A string ${string} tem ${vogais} vogais e ${consoantes} consoantes.`
    }
    
    console.log(funcaoContarLetras('AAA234234a!aaaabcdef'));