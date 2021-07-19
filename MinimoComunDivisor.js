function minimoComunDivisor(valorA,valorB){
 
    let arrayA = [];
    let arrayB = [];
    for(let i = 0  ; i <=valorA ; i++) arrayA.push(i);    
    for(let j = 0  ; j <=valorB ; j++) arrayB.push(j);
    
    var mcd = 0;
    var encontrado = false;
    
    while(!encontrado){
        mcd++;
        if(arrayA.every( (item) => mcd%item===0)&&arrayB.every( (item) => mcd%item===0))  encontrado=true;    
    }

    return mcd;


}


console.log(minimoComunDivisor(1,5));