function getPair(Genom){
    return Genom==="A" ? "T" : Genom==="T" ? "A" : Genom==="C" ? "G" : Genom==="G" ? "C" : null;
}

function pairElement(str) {

    var myBaseArray = str.split("");
    var myResultArray = [];

    myBaseArray.map( GenomA => myResultArray.push([GenomA,getPair(GenomA)]));

    return myResultArray;
  }
  
 console.log(pairElement("GCG"));