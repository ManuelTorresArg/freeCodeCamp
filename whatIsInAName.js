function whatIsInAName(collection, source) {
  var arr = [];

  // Only change code below this line
  var keysSource = Object.keys(source);
  for(let i = 0; i< collection.length; i++){
    let flag = true;
    for(let j = 0; j<keysSource.length;j++){
      if(!(collection[i][keysSource[j]] === source[keysSource[j]])){
        flag = false;
      }
    }
    if(flag){
        arr.push(collection[i]);
    }
  }
  return arr; 
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, 
                             { first: "Mercutio", last: null }, 
                             { first: "Tybalt", last: "Capulet" }]
                             , { last: "Capulet" }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 },
                             { "bat": 2 },
                             { "apple": 1, "bat": 2, "cookie": 2 }],
                             { "apple": 1, "bat": 2 }));
  console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }],
                             { "apple": 1, "bat": 2 }));