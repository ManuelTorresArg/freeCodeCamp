var Person = function(firstAndLast) {
    // Only change code below this line
    var completeName = firstAndLast;
   // Complete the method below and implement the others similarly
    this.getFirstName = function () {
      return completeName.split(" ")[0];
    }
    this.getLastName =  function () {
      return completeName.split(" ")[1];
    }
    this.getFullName = function() {
      return completeName;
    };
    this.setFirstName =  function (first) {
        completeName = first+" "+completeName.split(" ")[1];

    }
    this.setLastName =  function (last) {
        completeName = completeName.split(" ")[0]+" "+last;

    }
    this.setFullName =  function (newfirstAndLast) {
        completeName = newfirstAndLast;

    }
  };
  
  var bob = new Person('Bob Ross');

  console.log(bob.getFullName);

  bob.setFirstName("Haskell");

  console.log(bob.getFullName);

  bob.setLastName("Curry");

  console.log(bob.getFullName);


