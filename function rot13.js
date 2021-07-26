function rot13(str) {

    resultStr="";
    
    str.split("").map((a)=>{if(a.match(/[A-Z]+/)){ console.log("-"+a+" -> "+String.fromCharCode(a.charCodeAt(0)+13 > 90 ? a.charCodeAt(0)+13-26 : a.charCodeAt(0)+13 ))} else {console.log(a)}});
    
    
      return resultStr;
    }
    
   console.log(rot13("SERR PBQR PNZC"));