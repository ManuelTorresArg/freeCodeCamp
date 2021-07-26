function convertToRoman(num) {
    var romanos ={
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M",
    }
    var calcNum = num;
    var resultRoman=[];

    for(let i=Object.values(romanos).length-1 ; i>=0 ; i--){
       console.log(Object.keys(romanos)[i]); 
       console.log(calcNum-Object.keys(romanos)[i]);

    }


    return resultRoman;
   }
   
   console.log(convertToRoman(36));