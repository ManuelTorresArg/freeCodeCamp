function repeatStringNumTimes(str, num) {
    result = "";
    for(let i = 0; i<num ; i++) result += str; 
     return result;
  }
  
  console.log(repeatStringNumTimes("*", 3));
  console.log(repeatStringNumTimes("abc", 3)+'  '+repeatStringNumTimes("abc", 3).length);
  console.log(repeatStringNumTimes("abc", -2));