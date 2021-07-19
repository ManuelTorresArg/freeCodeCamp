function isVowel(char) {
        var vowels = new Array("a", "e", "i", "o", "u");
        var Vowel = false;
    
        for (e in vowels) {
          if (vowels[e] == char) {
            Vowel = true;
          }
        }
    
        return Vowel;    
    }

function strEnd(Str) {

    var resultStr = "";
    var cont = 0;
    do {
    cont++;
    resultStr = resultStr+(Str[Str.lenght-cont]);

    }while (!(isVowel(Str[Str.lenght-cont])))

    return resultStr+Str.slice(Str.lenght-cont)+"ay";

}

console.log(strEnd("california"));