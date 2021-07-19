function filteredArray(arr, elem) {
    let newArr = [];
    console.log(arr);
    // Only change code below this line
    for(let i=0;i<arr.length;i++) {
      
      for(let j=0;j<arr.length;j++) {

        if(arr[i][j]!=elem){
            console.log("En el array "+i);
            newArr.push(arr[i]);
        }

      }
  
    }
  
    // Only change code above this line
    return newArr;
  }

  console.log(filteredArray([[3, 2, 3], [1, 6, 4], [3, 13, 26], [19, 3, 9]], 3));