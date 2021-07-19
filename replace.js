function isUpperCase(myChar){
    return myChar.toUpperCase() === myChar;
};

function returnStr(before,after) {
        if(isUpperCase(before[0])) {
        newChar=after[0].toUpperCase();
        return newChar+after.slice(1);} 
        else return after.toLowerCase();    
}

function myReplace(str, before, after) {
    str.replace(before.toLowerCase(), returnStr(before,after));
    var myRegExp = new RegExp(before,"ig");  
    return str.replace(myRegExp, returnStr(before,after));
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
  console.log(myReplace("I think we should look up there", "up", "Down"));

