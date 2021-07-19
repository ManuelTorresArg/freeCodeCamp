function titleCase(str) {
    return (str.split(' ').map( word => (word.split('').map((subword,index) => index===0 ? subword=subword.toUpperCase() : 
                                        subword=subword.toLowerCase() )).join(''))).join(' ');
  }
  
  console.log(titleCase("I'm a little tea pot"));