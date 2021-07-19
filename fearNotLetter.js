function fearNotLetter(str) {
    for(let i=0;i<str.length;i++)
        if(!(str.charCodeAt(i+1)==str.charCodeAt(i)+1)&&str.charCodeAt(i)<122) return String.fromCharCode(str.charCodeAt(i)+1);
   }
  
  console.log(fearNotLetter("abce"));
  console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));