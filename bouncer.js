function bouncer(arr) {
    var tempArray=[];
    arr.map((elem) =>  elem ? tempArray.push(elem) : null );
    return tempArray;
  }
  
  console.log(bouncer([7, "ate", "", false, 9]));