function getIndexToIns(arr, num) {
    arr.sort(function(a,b){return a-b});
    console.log(arr+' '+num);
    var pos = 0
     for(let i=0 ; i<arr.length ; i++) {
       if (num<=arr[i] && pos===0) {pos=i} ;
     }

     if (num>arr[arr.length-1]) pos=arr.length;
     if (num==arr[0]) pos=0;
     
    return pos;
      
    
    
    }
    
    console.log(getIndexToIns([3, 10, 5], 3));
   // console.log(getIndexToIns([2, 5, 10], 15));
  