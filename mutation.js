function mutation(arr) {
    var subArrA = arr[0].split('');
    var subArrB = arr[1].split('');
    console.log(subArrA);
    
    console.log(subArrB);
    
    var Existe=true;
    for(let i=0; i<subArrB.length ; i++){
        Existe = Existe && subArrA.includes(subArrB[i]);
    };

    return Existe;
  }
  
  console.log(mutation(["hello", "hey"]));
  console.log(mutation(["hello", "hel"]));
  console.log(mutation(["hello", "he"]));