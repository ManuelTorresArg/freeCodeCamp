function isVowel (myChar) {

  return !(["a","e","i","o","u"].indexOf(myChar)<0);
}

function translatePigLatin(str) {

    var myStr=[...str.split("")] ;     
    var iniStr=[];

  if(!(isVowel(str[0]))) {
      for(let i = 0  ; i < myStr.length-1 ; i++) {
        if(isVowel(myStr[i])) {
          iniStr= myStr.splice(i,myStr.length-i);
          console.log(myStr[i]);
          break;
        }
      }      
      return iniStr.concat(myStr).concat(["a","y"]).join("");
  } else return myStr.concat(["w","a","y"]).join("");
};
    
    console.log(translatePigLatin("rhythm"));
    console.log(translatePigLatin("california"));
    console.log(translatePigLatin("algorithm"));