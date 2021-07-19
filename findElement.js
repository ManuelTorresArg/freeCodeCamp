function findElement(arr, func) {
    let num = 0;
    num = arr.filter(elem => func(elem))[0];
    return num;
  }
  
  console.log(findElement([1, 3, 5], num => num % 2 === 0));