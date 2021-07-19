function destroyer(arr) {

    var arrBusca = [];

    for(let i= 1;i<arguments.length;i++) arrBusca.push(arguments[i]);

    console.log(arrBusca);

    var tempArr = [...arguments[0]].map(elemArr => {if (!(arrBusca.includes(elemArr))) {return elemArr} }).filter(item=>(typeof item ===`number`)||(typeof item ===`string`));
    
    return tempArr;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));