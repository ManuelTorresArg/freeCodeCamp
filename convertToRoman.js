var romanos ={
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
}

function getValueKey(value,mod){
    for(let i=0 ; i<7 ; i++){
        if (romanos[i]=value) {
            console.log(romanos[i+mod]);
            return romanos[i+mod];
        } 
  }
}

function fixRoman(roman){
    arrayTemp = roman.reverse().join("");

    //X
    arrayTemp.replace('XXXX','XL');

    return arrayTemp.reverse();
}

function convertToRoman(num) {

    var calcNum = num;
    var resultRoman=[];

    for(let i=Object.values(romanos).length-1 ; i>=0 ; i--){ // || Object.keys(romanos)[i]-calcNum<=2*()
        while(calcNum>=Object.keys(romanos)[i]) { // Verifica que el numnero sea mayor que el valor evaluado (romanos[i])
            calcNum = calcNum-Object.keys(romanos)[i]; // Resta el valor de la key 
            resultRoman.push(Object.values(romanos)[i]) // Agrega el valor correspondiente en el array resultados
        }
    }
    return fixRoman(resultRoman).join("");
   }
   
   console.log(convertToRoman(44));