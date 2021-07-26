
    function telephoneCheck(phoneNumber) {
        var regExp = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
        var phone = phoneNumber.match(regExp);
        if (phone) {          
          return true;
        }        
        return false;
      }
    
    console.log(telephoneCheck("555-555-5555"));
    console.log(telephoneCheck("1 555-555-5555"));
    console.log(telephoneCheck("1 (555) 555-5555"));
    console.log(telephoneCheck("5555555555"));
    console.log(telephoneCheck("1(555)555-5555"));
    console.log(telephoneCheck("1 456 789 4444"));