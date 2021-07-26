function addTogether(a, b) {
    // only if valid number provided
    if (Number.isFinite(a)) {
      if (!b) {
        return function(c) {
          if (Number.isFinite(c)) {
            return a + c;
          }
        };
      }
      else if (Number.isFinite(b)) {
        return a + b;
      }
    }
    // returns undefined by default
  }
  
  console.log(addTogether(2)(3));