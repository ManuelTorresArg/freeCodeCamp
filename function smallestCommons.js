function smallestCommons(arr) {
    var valueA = arr[0];
    var valueB = arr[1];
    let finish=false;
    var cont = 0;

    while (!finish){
        finish = false; 
        cont++; 
        for(let i = 0; i<=valueA;i++){
            console.log(i);
            for(let j = 0 ; j<=valueB ; j++){
                console.log(j);
                finish=finish&&((cont%i==0) && (cont%j == 0)) ;
            }
        }
        console.log("Cont: "+ cont);
              
    }

    return cont;
  }
  
  
  console.log("result: "+smallestCommons([1,5]));