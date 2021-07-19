    function spinalCase(str) {

        var miRegex =/[A-Z]/gm;
        var final = str.replace(miRegex,function(match){return " "+match}).replace(/[-_]+/g," ").replace(/\s+/g," ").trim().toLowerCase().replace(/\s/g,"-");

        //.replace(/\s+/g,/\s/)

      return final;
    }
    
    console.log(spinalCase('ThisIsSpinalTap'));
    console.log(spinalCase('This Is Spinal Tap'));
    console.log(spinalCase('The_Andy_Griffith_Show'));
    console.log(spinalCase('Teletubbies say Eh-oh'));
    console.log(spinalCase('AllThe-small Things'));