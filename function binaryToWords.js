function binaryToWords(str) {

  return (str.split(/\s/).map( (myString) => String.fromCharCode(parseInt(myString,2))).join(""));

    //return str.split(/\s/).map(function (val){
    //  return String.fromCharCode(parseInt(val, 2));
    //}).join("");
  }

console.log(binaryToWords("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));