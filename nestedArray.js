function findLongestWordLength(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  
    
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  console.log(findLongestWordLength("What is the average airspeed velocity of an unladen swallow"));
  console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));