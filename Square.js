const squareList = arr => {

    // Only change code below this line
  
    arr=arr.filter( item => (item>0)&&(Number.isInteger(item))).map( item => item*item);
  
    return arr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);