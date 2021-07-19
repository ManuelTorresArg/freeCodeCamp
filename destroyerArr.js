function destroyer(arr) { 
    return arr.map(elem => [arr[1],arr[2]].indexOf(elem)<0 ? elem : null);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));