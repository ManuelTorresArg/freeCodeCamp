
  function add(f) {
    // Only change code below this line
      return function(x) {return function(y){return function(x){return function (x,y,z){return x+y+z}}}};
  
    // Only change code above this line
  }
  console.log(add(10)(20)(30));

  const curried = x => y => z=> z+ x + y;
  
  console.log(curried(1)(2)(3));