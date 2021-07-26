const creaLista = (Max) => {

    var lista =[]
    var aSumar = 0;

    while (aSumar <= Max) {
        if(lista.length<2) {aSumar = 1}
        else {aSumar=lista[lista.length-1]+lista[lista.length-2]};
        if (aSumar <= Max ) lista.push(aSumar);
    } ;

    return lista;

}

const sumFibs = (valorMax) => {

    var listaFib = creaLista(valorMax);


    return (listaFib.length>0 ? (listaFib.filter( elem => elem % 2 != 0).reduce(function(acum,value){ return value+acum })) : 1 );
        
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));
