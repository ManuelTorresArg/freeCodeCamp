function truncateString(str, num) {
    return str.slice(0,num)+(str.length>num ? '...' : '');
  }
  


  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));