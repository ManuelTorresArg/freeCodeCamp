function sumAll(arr) {
    let acum=0;
    let tempArr= [... arr.sort((a,b)=>a-b)];
    console.log(tempArr);
    for(let i=tempArr[0];i<=tempArr[tempArr.length-1];i++){
      acum += i;
    }
    return acum;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([5, 10]));