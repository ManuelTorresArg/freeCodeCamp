function frankenSplice(arr1, arr2, n) {
    var tempArray= [...arr2];
    tempArray.splice(n,0,...arr1);

    console.log(arr1);
    console.log(arr2);
    console.log(tempArray);
    

    return tempArray;
  }
  
  
  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));