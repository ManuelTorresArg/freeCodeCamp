function esUnico(valor,myArr) {
    return myArr.indexOf(valor)<0;
}

function uniteUnique(arr) {
    var valuesArray = [...arr]
    var resultArray = [];    
    for(let i=0; i<arguments.length;i++)
        arguments[i].map(elemArray => {if(esUnico(elemArray,resultArray)) resultArray.push(elemArray)});
    return resultArray;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));